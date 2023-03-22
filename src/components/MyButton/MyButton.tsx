import "./MyButton.scss";

enum Colour {
  BLUE = "#348efb",
  RED = "#b53518",
}
type MyButtonProps = {
  name: string;
  handleClick: () => void;
  color: Colour;
};

export default function MyButton({ color, name, handleClick }: MyButtonProps) {
  return (
    <button style={{ background: color }} onClick={handleClick} className="myButton">
      {name}
    </button>
  );
}
