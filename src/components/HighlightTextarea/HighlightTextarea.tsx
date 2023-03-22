import "./HighlightTextarea.scss";
import Highlighter from "../Highlighter/Highlighter";

type HighlightTextareaProps = {
  text: string;
  handleChangeText: (value: string) => void;
  isDisabled: boolean;
  hashFilter: string[];
};

export default function HighlightTextarea({
  text,
  handleChangeText,
  isDisabled,
  hashFilter,
}: HighlightTextareaProps) {
  return (
    <div className="highlightTextarea">
      <textarea
        disabled={isDisabled}
        onChange={(e) => handleChangeText(e.target.value)}
        value={text}
      ></textarea>
      <p className="editortext">
        <Highlighter text={text} wordList={hashFilter} />
      </p>
    </div>
  );
}
