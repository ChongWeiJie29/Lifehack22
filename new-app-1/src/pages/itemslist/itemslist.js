import Modal from "./modal_filter";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Scanner from '../qr/scanner';

function Itemslist() {
    const [modalState, setModalState] = useState("none");
    return (
      <div className="App">
        <h1>Items</h1>
        <button id="myBtn" onClick={() => setModalState("block")}>
          Filter
        </button>
        <Modal display={modalState} setDisplayState={setModalState} />
        <h2>Item</h2>
        <p>Expiry Date: 01-Jan-2023</p>
        <h2>Item1</h2>
        <p>Expiry Date: 02-Jan-2023</p>
        <h2>Item2</h2>
        <p>Expiry Date: 03-Jan-2023</p>
        <h2>Item3</h2>
        <p>Expiry Date: 04-Jan-2023</p>
        <div class="tab">
            <button class="tablinks">Items</button>
            <Link to="../scanner"><button class="tablinks">QR code scanner</button></Link>
        </div>
      </div>
    );
  }
  
  export default Itemslist;