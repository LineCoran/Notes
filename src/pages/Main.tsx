import { useEffect, useState } from "react";
import Aside from "../components/Aside/Aside";
import Editor from "../components/Editor/Editor";
import { INote } from "../types";
import "./Main.scss";
export default function Main() {
  const [notes, setNotes] = useState<INote[]>([{ id: 1, title: "", text: "", tags: [] }]);
  const [activeNote, setActiveNote] = useState<number | null>(1);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTages] = useState<string[]>([]);

  useEffect(() => {
    let [...newNotes] = notes;
    newNotes = newNotes.map((note) => {
      return note.id === activeNote
        ? { ...note, title: title, text: text, tags: findTag(text) }
        : { ...note };
    });
    setNotes(newNotes);
  }, [title, text, activeNote]);

  const createNote = () => {
    // const newNote: INote = {
    //   id: Date.now(),
    //   title: "",
    //   text: "",
    //   tags: [],
    // };
    const id = Date.now();
    setTitle("");
    setText("");
    setTages([]);
    setNotes((prev) => [...prev, { id, title, text, tags }]);
    setActiveNote(id);
  };

  const deleteNote = () => {
    setNotes((prev) => prev.filter((note) => note.id !== activeNote));
    setTitle("");
    setText("");
    setTages([]);
    setActiveNote(null);
  };

  const handleChangeTitle = (title: string) => {
    setTitle(title);
  };

  const handleChangeText = (text: string) => {
    setText(text);
  };

  function findTag(text: string) {
    const words = text.replaceAll("\n", " ").split(" ");
    const regrex = /^#[a-zа-я\d_]{2,}$/i;
    const newTags = words.filter((word) => regrex.test(word));
    return newTags.length ? newTags : [];
  }

  const handleClickNote = (id: number) => {
    const newActiveNote = notes.find((item) => item.id === id);
    setText(newActiveNote?.text || "");
    setTitle(newActiveNote?.title || "");
    setActiveNote(id);
  };

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
