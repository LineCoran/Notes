import Note from '../Note/Note';
import { INote } from '../../types';

type NoteListProps = {
  notes: INote[];
  activeNote: number;
  handleClickNote: (id: number) => void;
};

export default function NoteList({ notes, handleClickNote, activeNote }: NoteListProps) {
  return (
    <ul className="noteList">
      {notes.length ? (
        notes.map((note, index) => (
          <Note activeNote={activeNote} handleClickNote={handleClickNote} key={index} note={note} />
        ))
      ) : (
        <p>No Notes</p>
      )}
    </ul>
  );
}
