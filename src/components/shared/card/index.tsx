import React from "react";
import styles from "./card.module.css";
import { CardProps } from "./types";

const Card = (props: CardProps) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <div>{data.name}</div>
      <div>
        <img src={data.image} alt={"character"}></img>
      </div>
      <div>{data.gender}</div>
      <div>{data.location.name}</div>
    </div>
  );
};

export default Card;
