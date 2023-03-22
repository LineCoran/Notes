type HashProps = {
  name: string;
  addHashFilter: (value: string) => void;
  deleteHashFilter: (value: string) => void;
  hashFilter: string[];
};

export default function HashFilter({
  name,
  addHashFilter,
  deleteHashFilter,
  hashFilter,
}: HashProps) {
  const isActiveHash = hashFilter.indexOf(name) > -1;

  return (
    <div
      className={isActiveHash ? "active" : ""}
      onClick={() => (isActiveHash ? deleteHashFilter(name) : addHashFilter(name))}
    >
      {name}
    </div>
  );
}
