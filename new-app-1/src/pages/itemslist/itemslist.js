import "../../styles/itemlist.css";
import Modal from "./modal_filter";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../../styles/lifehack_home.png";
import IndivItems from "./indivlist";
import userList from '../../database/user_fe.json';

function Itemslist() {
  const [modalState, setModalState] = useState("none");
  var rows = [];
  for (let i of userList) {
      rows.push(<IndivItems item={i.item_desc} expiry={i.expiry_date} />);
  }
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
        {rows}
      </div>
      <div class="tab">
        <button id="item_tab">Items</button>
        <Link to="../scanner">
          <button id="QR_tab">QR code scanner</button>
        </Link>
      </div>
    </div>
  );
}

export default Itemslist;
