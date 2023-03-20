import MyInput from '../MyInput/MyInput';
import MyButton from '../MyButton/MyButton';
import { Colour } from '../../enums';
import './Editor.scss';

type EditorProps = {
  title: string;
  text: string;
  activeNote: number;
  hadleChangeTitle: (value: string) => void;
  handleChangeText: (value: string) => void;
  handleClick: () => void;
};

export default function Editor({
  title,
  hadleChangeTitle,
  text,
  handleChangeText,
  handleClick,
}: EditorProps) {
  return (
    <div className="editor">
      <div className="editorHead">
        <MyInput value={title} handleChange={hadleChangeTitle} placeholder="Untitle note" />
        <MyButton color={Colour.RED} name="Delete" handleClick={handleClick} />
      </div>
      <div className="editorBody">
        <textarea onChange={(e) => handleChangeText(e.target.value)} value={text}></textarea>
      </div>
    </div>
  );
}
