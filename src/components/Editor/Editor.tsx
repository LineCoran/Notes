import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import { Colour } from "../../enums";
import "./Editor.scss";
import { INote } from "../../types";
import HashList from "../HashList/HashList";
import MyTextarea from "../MyTextarea/MyTextarea";

type EditorProps = {
  title: string;
  text: string;
  activeNote: number | null;
  hadleChangeTitle: (value: string) => void;
  handleChangeText: (value: string) => void;
  handleClick: () => void;
  handleClickHash: (value: string) => void;
  notes: INote[];
  hashFilter: string[];
};

export default function Editor({
  title,
  hadleChangeTitle,
  text,
  handleChangeText,
  handleClick,
  activeNote,
  notes,
  handleClickHash,
  hashFilter,
}: EditorProps) {
  return (
    <div className="editor" style={{ opacity: activeNote ? "1" : "0.4" }}>
      <div className="editorHead">
        <MyInput
          isDisabled={!activeNote}
          value={title}
          handleChange={hadleChangeTitle}
          placeholder="Untitle note"
        />
        <MyButton color={Colour.RED} name="Delete" handleClick={handleClick} />
      </div>
      <div className="editorBody">
        <MyTextarea
          text={text}
          handleChangeText={handleChangeText}
          isDisabled={!activeNote}
          hashFilter={hashFilter}
        />
        <HashList
          handleClickHash={handleClickHash}
          hashes={notes.find((note) => note.id === activeNote)?.hashes}
        />
      </div>
    </div>
  );
}
