import '../styles/homepage.css'

// When the user clicks the button, open the modal 
function openModal() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  function closeModal() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  function closeModalAgain(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function Homepage() {
  return (
    <div className="App">
        <h1>INSERT NAME</h1>
        <p>Smarter meal planning decisions</p>
        <button id="myBtn" onClick={openModal}>Log in</button>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal} >&times;</span>
                <h2>Log in</h2>
                <input type="textbox" placeholder="Username/ Email"/>
                <br></br>
                <input type="textbox" placeholder="Password"/>
                <p><a href="reset.html">Forget password?</a></p>
                <button>Log in</button>
            </div>
        </div>
    </div>
  );
}

export default Homepage;

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
