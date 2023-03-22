import { useEffect, useMemo, useState } from "react";
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
  const [hashes, setHashes] = useState<string[]>([]);
  const [allHashes, setAllHashes] = useState<string[]>([]);
  const [hashFilter, setHashFilter] = useState<string[]>([]);

  useEffect(() => {
    setAllHashes(getUniqueHashes(notes));
  }, [hashes, notes]);

  useEffect(() => {
    let [...newNotes] = notes;
    newNotes = newNotes.map((note) => {
      return note.id === activeNote ? { ...note, title: title, text: text, hashes } : { ...note };
    });
    setNotes(newNotes);
  }, [title, text]);

  const filtredNotes = useMemo(() => {
    if (hashFilter.length) {
      return notes.filter((note) => note.hashes.some((hash) => hashFilter.indexOf(hash) > -1));
    }
    return notes;
  }, [hashFilter, notes]);

  const createNote = () => {
    const id = Date.now();
    setTitle("");
    setText("");
    setNotes((prev) => [...prev, { id, title, text, hashes: [] }]);
    setHashes([]);
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
    setText((prev) => text);
    setHashes(Array.from(new Set(findHashes(text))));
  };

  const handleClickNote = (id: number) => {
    const newActiveNote = notes.find((item) => item.id === id);
    setText(newActiveNote?.text || "");
    setTitle(newActiveNote?.title || "");
    setHashes(newActiveNote?.hashes || []);
    setActiveNote(id);
  };

  const addHashFilter = (filter: string) => {
    setHashFilter((prev) => [...prev, filter]);
  };

  const deleteHashFilter = (filter: string) => {
    setHashFilter((prev) => [...prev.filter((hash) => hash !== filter)]);
  };

  const deleteHash = (deletedHash: string) => {
    setHashes((prev) => prev.filter((hash) => hash !== deletedHash));
    setText((prev) => prev.replaceAll(deletedHash, ""));
  };

  function getUniqueHashes(allNotes: INote[]) {
    let array: string[] = [];
    allNotes.forEach((note) => {
      array = array.concat([...note.hashes]);
    });
    return Array.from(new Set(array));
  }

  return (
    <div className="main">
      <Aside
        activeNote={activeNote}
        notes={filtredNotes}
        handleClick={createNote}
        handleClickNote={handleClickNote}
        allHashes={allHashes}
        addHashFilter={addHashFilter}
        deleteHashFilter={deleteHashFilter}
        hashFilter={hashFilter}
      />
      <Editor
        text={text}
        title={title}
        activeNote={activeNote}
        hadleChangeTitle={handleChangeTitle}
        handleChangeText={handleChangeText}
        handleClick={deleteNote}
        handleClickHash={deleteHash}
        notes={notes}
      />
    </div>
  );
}
