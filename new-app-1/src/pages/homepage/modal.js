import React, { useState } from 'react';

function Modal(props) {
    const [modalState, setModalState] = useState("none");
    return (
          <div id="myModal" className="modal" style={{display:props.display}}>
              <div className="modal-content">
                  <span className="close" onClick={()=> props.setDisplayState('none')}>&times;</span>
                  <h2>Log in</h2>
                  <input type="textbox" placeholder="Username/ Email"/>
                  <br></br>
                  <input type="textbox" placeholder="Password"/>
                  <p><a href="reset.html">Forget password?</a></p>
                  <button>Log in</button>
              </div>
        </div>
    );
  }
  
  export default Modal;