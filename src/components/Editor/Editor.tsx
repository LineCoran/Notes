import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import { Colour } from "../../enums";
import "./Editor.scss";
import { INote } from "../../types";
import HashList from "../HashList/HashList";

type EditorProps = {
  title: string;
  text: string;
  activeNote: number | null;
  hadleChangeTitle: (value: string) => void;
  handleChangeText: (value: string) => void;
  handleClick: () => void;
  handleClickHash: (value: string) => void;
  notes: INote[];
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
}: EditorProps) {
  return (
    <div className="editor">
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
        <textarea
          disabled={!activeNote}
          onChange={(e) => handleChangeText(e.target.value)}
          value={text}
        ></textarea>
        <HashList
          styleType="standart"
          handleClickHash={handleClickHash}
          hashes={notes.find((note) => note.id === activeNote)?.hashes}
        />
      </div>
    </div>
  );
}
