import { useEffect, useState } from 'react';
import Aside from '../components/Aside/Aside';
import Editor from '../components/Editor/Editor';
import { INote } from '../types';
import './Main.scss';
export default function Main() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notes, setNotes] = useState<INote[]>([{ id: 0, title, text }]);
  const [activeNote, setActiveNote] = useState(0);

  useEffect(() => {
    let [...newNotes] = notes;
    newNotes = newNotes.map((note) => {
      return note.id === activeNote ? { ...note, title: title, text: text } : { ...note };
    });
    setNotes(newNotes);
  }, [title, text]);

  const createNote = () => {
    const newNote: INote = {
      id: Date.now(),
      title: '',
      text: '',
    };
    setNotes((prev) => [...prev, newNote]);
    setActiveNote(newNote.id);
  };

  const deleteNote = () => {
    setNotes((prev) => prev.filter((note) => note.id !== activeNote));
  };

  const handleChangeTitle = (title: string) => {
    console.log('here');
    setTitle(title);
  };

  const handleChangeText = (text: string) => {
    setText(text);
  };

  const handleClickNote = (id: number) => {
    const newActiveNote = notes.find((item) => item.id === id);
    setText(newActiveNote?.text || '');
    setTitle(newActiveNote?.title || '');
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
