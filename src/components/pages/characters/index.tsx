import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./characters.module.css";
import Card from "../../shared/card";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/characters/name`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dataToMap = data.map((character) => <Card data={character} />);
  return (
    <div className={styles.container}>
      <h3>Characters</h3>
      <div>{dataToMap}</div>
    </div>
  );
};

export default Characters;
