import { useState } from "react";
import { INote } from "../../types";
import MyButton from "../MyButton/MyButton";
import SearchInput from "../MyInput/MyInput";
import NoteList from "../NoteList/NoteList";
import { Colour } from "../../enums";
import "./Aside.scss";
import HashList from "../HashList/HashList";

type AsideProps = {
  notes: INote[];
  activeNote: number | null;
  handleClick: () => void;
  handleClickNote: (id: number) => void;
  allHashes: string[];
  hashFilter: string[];
  addHashFilter: (value: string) => void;
  deleteHashFilter: (value: string) => void;
};

export default function Aside({
  notes,
  handleClick,
  handleClickNote,
  activeNote,
  allHashes,
  deleteHashFilter,
  addHashFilter,
  hashFilter,
}: AsideProps) {
  return (
    <aside className="aside">
      <div className="create">
        <MyButton color={Colour.BLUE} name="Create" handleClick={handleClick} />
      </div>
      <HashList
        styleType="filter"
        hashes={allHashes}
        handleClickHash={() => console.log("hello")}
        addHashFilter={addHashFilter}
        deleteHashFilter={deleteHashFilter}
        hashFilter={hashFilter}
      />
      <NoteList activeNote={activeNote} handleClickNote={handleClickNote} notes={notes} />
    </aside>
  );
}
