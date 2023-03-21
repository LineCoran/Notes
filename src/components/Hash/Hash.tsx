import React from "react";
import "./Hash.scss";

type HashProps = {
  name: string;
};

export default function Hash({ name }: HashProps) {
  return <div className="hash">{name}</div>;
}
