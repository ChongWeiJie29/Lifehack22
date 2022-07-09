import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Itemslist from '../itemslist/itemslist';

function Modal(props) {
    const [modalState, setModalState] = useState("none");
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = event => {
        event.preventDefault(); // 👈️ prevent page refresh
    
        // 👇️ access input values here
        console.log('userName 👉️', userName);
        console.log('password 👉️', password);
    
        // 👇️ clear all input values in the form
        setUserName('');
        setPassword('');
      };
    return (
          <div id="myModal" className="modal" style={{display:props.display}}>
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <span className="close" onClick={()=> props.setDisplayState('none')}>&times;</span>
                  <h2>Log in</h2>
                  <input type="textbox" name="userName" placeholder="Username" onChange={event => setUserName(event.target.value)}
          value={userName}/>
                  <br></br>
                  <input type="password" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)}
          value={password}/>
                  <p><a href="./reset">Forget password?</a></p>
                  <button type="submit">Log in</button>
                </form>
              </div>
        </div>
    );
  }
  
  export default Modal;