import './MyInput.scss';

type InputProps = {
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
};
export default function MyInput({ placeholder, value, handleChange }: InputProps) {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className="myInput"
      value={value}
      placeholder={placeholder}
    />
  );
}
