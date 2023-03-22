import "./MyTextarea.scss";
import Highlighter from "../Highlighter/Highlighter";

type MyTextareaProps = {
  text: string;
  handleChangeText: (value: string) => void;
  isDisabled: boolean;
  hashFilter: string[];
};

export default function MyTextarea({
  text,
  handleChangeText,
  isDisabled,
  hashFilter,
}: MyTextareaProps) {
  const paragraphes = text.split("[:paragraph:]");
  return (
    <div className="highlightTextarea">
      <textarea
        disabled={isDisabled}
        onChange={(e) => handleChangeText(e.target.value)}
        value={paragraphes.join("\n")}
      ></textarea>
      <div className="editortext">
        {paragraphes.map((paragraph, i) => (
          <Highlighter key={i} text={paragraph} wordList={hashFilter} />
        ))}
      </div>
    </div>
  );
}
