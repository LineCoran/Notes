import { useEffect, useState } from "react";
import Aside from "../components/Aside/Aside";
import Editor from "../components/Editor/Editor";
import { findHashes } from "../helpers/helpers";
import { INote } from "../types";
import "./Main.scss";
export default function Main() {
  const [notes, setNotes] = useState<INote[]>([{ id: 1, title: "", text: "", hashes: [] }]);
  const [activeNote, setActiveNote] = useState<number | null>(1);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [allHashes, setAllHashes] = useState<string[]>([]);

  useEffect(() => {
    let [...newNotes] = notes;
    newNotes = newNotes.map((note) => {
      return note.id === activeNote
        ? { ...note, title: title, text: text, hashes: Array.from(new Set(findHashes(text))) }
        : { ...note };
    });
    setNotes(newNotes);
  }, [title, text]);

  useEffect(() => {
    setAllHashes(getUniqueHashes());
    console.log("work");
  }, [text]);

  const createNote = () => {
    const id = Date.now();
    setTitle("");
    setText("");
    setNotes((prev) => [...prev, { id, title, text, hashes: [] }]);
    setActiveNote(id);
  };

  const deleteNote = () => {
    setNotes((prev) => prev.filter((note) => note.id !== activeNote));
    setTitle("");
    setText("");
    setActiveNote(null);
  };

  // const deleteHash = () => {
  //   const currentNote
  // }

  const handleChangeTitle = (title: string) => {
    setTitle(title);
  };

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleClickNote = (id: number) => {
    const newActiveNote = notes.find((item) => item.id === id);
    setText(newActiveNote?.text || "");
    setTitle(newActiveNote?.title || "");
    setActiveNote(id);
  };

  function getUniqueHashes() {
    let array: string[] = [];
    notes.forEach((note) => {
      array = array.concat([...note.hashes]);
    });
    return Array.from(new Set(array));
  }

  return (
    <div className="main">
      <Aside
        activeNote={activeNote}
        notes={notes}
        handleClick={createNote}
        handleClickNote={handleClickNote}
      />
      <Editor
        text={text}
        title={title}
        activeNote={activeNote}
        hadleChangeTitle={handleChangeTitle}
        handleChangeText={handleChangeText}
        handleClick={deleteNote}
        notes={notes}
      />
    </div>
  );
}
