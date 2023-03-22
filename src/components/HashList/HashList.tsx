import Hash from "../Hash/Hash";
import "./HashList.scss";

type HashListProps = {
  hashes: string[] | undefined;
  handleClickHash: (value: string) => void;
};

export default function HashList({ hashes, handleClickHash }: HashListProps) {
  return (
    <ul className={`hashList`}>
      {hashes && hashes.length ? (
        hashes.map((hash, index) => (
          <Hash key={index} name={hash} handleClickHash={handleClickHash} />
        ))
      ) : (
        <p></p>
      )}
    </ul>
  );
}
