import '../../styles/homepage.css'
import Modal from './modal';
import React, { useState } from 'react';

function Homepage() {
  const [modalState, setModalState] = useState("none");
  return (
    <div className="App">
        <h1>INSERT NAME</h1>
        <p>Smarter meal planning decisions</p>
        <button id="myBtn" onClick={() => setModalState("block")}>Log in</button>
        <Modal display={modalState} setDisplayState={setModalState} />
    </div>
  );
}

export default Homepage;
