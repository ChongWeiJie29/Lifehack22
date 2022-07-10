import "../../styles/itemlist.css";
import Modal from "./modal_filter";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../../styles/lifehack_home.png";

function Itemslist() {
  const [modalState, setModalState] = useState("none");
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div id="header_list">
        <h1 id="item_title">Items</h1>
        <button id="Filter_button" onClick={() => setModalState("block")}>
          Filter
        </button>
        <Modal
          id="filter_modal"
          display={modalState}
          setDisplayState={setModalState}
        />
      </div>
      <div class="content">
        <div class="item">
            <h2>Item0</h2>
            <p>Expiry Date: 01-Jan-2023</p>
        </div>
        <div class="item">
            <h2>Item1</h2>
            <p>Expiry Date: 02-Jan-2023</p>
        </div>
        <div class="item">
            <h2>Item2</h2>
            <p>Expiry Date: 03-Jan-2023</p>
        </div>
        <div class="item">
            <h2>Item3</h2>
            <p>Expiry Date: 04-Jan-2023</p>
        </div>
        <div class="item">
            <h2>Item4</h2>
            <p>Expiry Date: 05-Jan-2023</p>
        </div>
      </div>
      <div class="tab">
        <button class="tablinks">Items</button>
        <Link to="../scanner">
          <button class="tablinks">QR code scanner</button>
        </Link>
      </div>
    </div>
  );
}

export default Itemslist;
