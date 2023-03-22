import "./Note.scss";
import { INote } from "../../types";

type NoteProps = {
  note: INote;
  handleClickNote: (id: number) => void;
  activeNote: number | null;
};

export default function Note({ note, handleClickNote, activeNote }: NoteProps) {
  const isActive = activeNote === note.id;
  return (
    <li
      id={String(note.id)}
      className={isActive ? "note note-active" : "note"}
      onClick={() => handleClickNote(note.id)}
    >
      <b>{note.title || "Untitled Note"}</b>
      <p>{note.text.replaceAll("[:paragraph:]", "") || "Blank"}</p>
    </li>
  );
}
