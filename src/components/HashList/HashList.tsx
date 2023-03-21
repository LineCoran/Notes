import Hash from "../Hash/Hash";
import HashFilter from "../Hash/HashFilter";
import "./HashList.scss";

type HashListProps = {
  hashes: string[] | undefined;
  styleType: "standart" | "filter";
  handleClickHash: (value: string) => void;
  addHashFilter: (value: string) => void;
  deleteHashFilter: (value: string) => void;
  hashFilter: string[];
};

export default function HashList({
  hashes,
  handleClickHash,
  addHashFilter,
  deleteHashFilter,
  styleType,
  hashFilter,
}: HashListProps) {
  const itsFilter = styleType === "filter";
  return (
    <ul className={`hashList hashList-${styleType}`}>
      {hashes && hashes.length ? (
        hashes.map((hash, index) =>
          itsFilter ? (
            <HashFilter
              handleClickHash={handleClickHash}
              key={index}
              name={hash}
              addHashFilter={addHashFilter}
              deleteHashFilter={deleteHashFilter}
              hashFilter={hashFilter}
            />
          ) : (
            <Hash key={index} name={hash} handleClickHash={handleClickHash} />
          )
        )
      ) : (
        <p></p>
      )}
    </ul>
  );
}
