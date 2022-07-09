import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Itemslist from '../itemslist/itemslist';

function Modal(props) {
    const [modalState, setModalState] = useState("none");
    return (
          <div id="myModal" className="modal" style={{display:props.display}}>
              <div className="modal-content">
                  <span className="close" onClick={()=> props.setDisplayState('none')}>&times;</span>
                  <h2>Log in</h2>
                  <input type="textbox" placeholder="Username/ Email"/>
                  <br></br>
                  <input type="password" placeholder="Password"/>
                  <p><a href="./reset">Forget password?</a></p>
                  <Link to='./itemslist'><button>Log in</button></Link>
              </div>
        </div>
    );
  }
  
  export default Modal;