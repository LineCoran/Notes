import Hash from "../Hash/Hash";
import "./HashList.scss";

type HashListProps = {
  hashes: string[] | undefined;
};

export default function HashList({ hashes }: HashListProps) {
  return (
    <ul className="hashList">
      {hashes && hashes.length ? (
        hashes.map((hash, index) => <Hash key={index} name={hash} />)
      ) : (
        <p>No Hashes</p>
      )}
    </ul>
  );
}
