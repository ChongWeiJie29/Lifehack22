import "../../styles/homepage.css";
import Modal from "./modal";
import React, { useState } from "react";

function Homepage() {
  const [modalState, setModalState] = useState("none");
  return (
    <div className="App">
      <h1 id="home_title">EX-(INS)PIRE</h1>
      <p id="home_description">Monitor your food storage</p>
      <p id="home_description">Track expiry dates</p>
      <p id="home_description">No more food waste</p>
      <button id="myBtn" onClick={() => setModalState("block")}>
        Log in
      </button>
      <Modal display={modalState} setDisplayState={setModalState} />
    </div>
  );
}

export default Homepage;
