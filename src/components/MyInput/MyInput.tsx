import "./MyInput.scss";

type InputProps = {
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
  isDisabled?: boolean;
};
export default function MyInput({ placeholder, value, handleChange, isDisabled }: InputProps) {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className="myInput"
      value={value}
      placeholder={placeholder}
      disabled={isDisabled}
    />
  );
}
