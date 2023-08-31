import React from "react";
import firebaseApp from "../../../helpers/firebase";
import Button from "../../shared/button";
import { useNavigate } from "react-router-dom";

function Characters() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      navigate("/");
      await firebaseApp.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <p>characters</p>
      <Button onClick={handleLogout} name="Logout" />
    </div>
  );
}

export default Characters;
