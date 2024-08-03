import { CardProps } from "@/types/card.types";
import React from "react";

const Card = (props: CardProps) => {
  const { name, phone, date, color , btata} = props;

  return (
    <div className="container">
      <text id={"bigTitle"}>{name}</text>
      <text id={"bigTitle"}>{phone}</text>
      <text id={"bigTitle"}>{date.toLocaleDateString()}</text>
      <text id={"bigTitle"}>{color}</text>
      <text id={"bigTitle"}>{btata}</text>
    </div>
  );
};

export default Card;
