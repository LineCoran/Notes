import { useState } from "react";
import { INote } from "../../types";
import MyButton from "../MyButton/MyButton";
import SearchInput from "../MyInput/MyInput";
import NoteList from "../NoteList/NoteList";
import { Colour } from "../../enums";
import "./Aside.scss";

type AsideProps = {
  notes: INote[];
  activeNote: number | null;
  handleClick: () => void;
  handleClickNote: (id: number) => void;
};

export default function Aside({ notes, handleClick, handleClickNote, activeNote }: AsideProps) {
  const [search, setSearch] = useState("");
  return (
    <aside className="aside">
      <div className="create">
        <MyButton color={Colour.BLUE} name="Create" handleClick={handleClick} />
      </div>

      <div className="search">
        <SearchInput
          placeholder="Search..."
          handleChange={(value) => setSearch(value)}
          value={search}
        />
      </div>
      <NoteList activeNote={activeNote} handleClickNote={handleClickNote} notes={notes} />
    </aside>
  );
}
