import "./Hash.scss";

type HashProps = {
  name: string;
  handleClickHash: (value: string) => void;
};

export default function Hash({ name, handleClickHash }: HashProps) {
  return <div onClick={() => handleClickHash(name)}>{name}</div>;
}
