import HashFilter from "../HashFilter/HashFIlter";
import "./HashFilterList.scss";

type HashFilterListProps = {
  hashes: string[] | undefined;
  handleClickHash: (value: string) => void;
  addHashFilter: (value: string) => void;
  deleteHashFilter: (value: string) => void;
  hashFilter: string[];
};

export default function HashFilterList({
  hashes,
  addHashFilter,
  deleteHashFilter,
  hashFilter,
}: HashFilterListProps) {
  return (
    <ul className={`hashFilterList`}>
      {hashes && hashes.length ? (
        hashes.map((hash, index) => (
          <HashFilter
            key={index}
            name={hash}
            addHashFilter={addHashFilter}
            deleteHashFilter={deleteHashFilter}
            hashFilter={hashFilter}
          />
        ))
      ) : (
        <p></p>
      )}
    </ul>
  );
}
