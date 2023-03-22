import Note from "../Note/Note";
import { INote } from "../../types";
import "./NoteList.scss";

type NoteListProps = {
  notes: INote[];
  activeNote: number | null;
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
