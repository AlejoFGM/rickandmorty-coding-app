import { useNavigate } from "react-router-dom";

import Button from "../button";
import firebaseApp from "../../../helpers/firebase";
import styles from "./header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Header = () => {
  const navigate = useNavigate();
  const { authUser: token } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    try {
      navigate("/");
      await firebaseApp.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(token);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span>Rick and Morty</span>
        </div>
        {!token.token ? (
          <div className={styles.logout}>
            <Button
              name={token.token ? "Characters" : "Login"}
              onClick={() => navigate("/")}
            />
            <Button
              name={token.token ? "Favorites" : "Register"}
              onClick={() => navigate(token.token ? "/" : "/register")}
            />
          </div>
        ) : null}
        {token.token ? (
          <div className={styles.logout}>
            <Button name="Logout" onClick={handleLogout} />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
