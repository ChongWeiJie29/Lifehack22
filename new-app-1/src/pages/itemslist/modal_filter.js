import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/modal_filter.css";
import Itemslist from "../itemslist/itemslist";

function Modal(props) {
  const [modalState, setModalState] = useState("none");
  return (
    <div id="filter_modal" className="modal" style={{ display: props.display }}>
      <div className="modal-content">
        <span className="close" onClick={() => props.setDisplayState("none")}>
          &times;
        </span>
        <h2 id="modal_filter_title">Sort by:</h2>
        <input type="radio" id="expiry" name="choice" required="required" />
        <label for="expiry" class="filter_options">
          Expiry Date
        </label>
        <br></br>
        <input type="radio" id="name" name="choice" />
        <label for="name" class="filter_options">
          Alphabetical Order
        </label>
        <br></br>
        <Link to="./itemslist">
          <button>Confirm</button>
        </Link>
      </div>
    </div>
  );
}

export default Modal;
