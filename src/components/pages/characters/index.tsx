import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./characters.module.css";
import Card from "../../shared/card";
import Button from "../../shared/button";
import { RootState, useAppSelector } from "../../../redux/store";

const Characters = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("name");

  const { authUser: token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/characters/${sort}/${page}`;

    const headers = {
      token: token.token,
    };

    axios
      .get(url, { headers })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, sort]);

  const dataToMap = data.map((character) => <Card data={character} />);
  return (
    <div className={styles.container}>
      <h3>Characters</h3>
      {data.length ? (
        <div className={styles.buttonsContainer}>
          <Button
            name="Name"
            onClick={() => {
              setSort("name");
            }}
          ></Button>
          <Button
            name="Planet"
            onClick={() => {
              setSort("planet");
            }}
          ></Button>
          <Button
            name="Gender"
            onClick={() => {
              setSort("gender");
            }}
          ></Button>
        </div>
      ) : null}
      <div className={styles.containerCards}>{dataToMap}</div>
      {data.length ? (
        <div className={styles.buttonsContainer}>
          <Button
            name="Prev page"
            onClick={() => {
              page > 1 && setPage(page - 1);
            }}
          ></Button>
          <Button
            name="Next page"
            onClick={() => {
              page < 43 && setPage(page + 1);
            }}
          ></Button>
        </div>
      ) : null}
    </div>
  );
};

export default Characters;
