import { useEffect, useState } from "react";
import Aside from "../components/Aside/Aside";
import Editor from "../components/Editor/Editor";
import { INote } from "../types";
import "./Main.scss";
import { findTag } from "../helpers/helpers";
export default function Main() {
  const [notes, setNotes] = useState<INote[]>([{ id: 1, title: "", text: "", tags: [] }]);
  const [activeNote, setActiveNote] = useState<number | null>(1);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [allHashes, setAllHashes] = useState<string[]>([]);

  useEffect(() => {
    let [...newNotes] = notes;
    newNotes = newNotes.map((note) => {
      return note.id === activeNote
        ? { ...note, title: title, text: text, tags: Array.from(new Set(findTag(text))) }
        : { ...note };
    });
    setNotes(newNotes);
  }, [title, text]);

  useEffect(() => {
    setAllHashes(getUniqueTags());
    console.log("work");
  }, [text]);

  const createNote = () => {
    const id = Date.now();
    setTitle("");
    setText("");
    setNotes((prev) => [...prev, { id, title, text, tags: [] }]);
    setActiveNote(id);
  };

  const deleteNote = () => {
    setNotes((prev) => prev.filter((note) => note.id !== activeNote));
    setTitle("");
    setText("");
    setActiveNote(null);
  };

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

  function getUniqueTags() {
    let array: string[] = [];
    notes.forEach((note) => {
      array = array.concat([...note.tags]);
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
      />
    </div>
  );
}
