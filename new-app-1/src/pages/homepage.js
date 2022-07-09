function Homepage() {
  return (
    <div className="App">
        <h1>INSERT NAME</h1>
        <p>Smarter meal planning decisions</p>
        <button id="myBtn">Log in</button>
        <div id="myModal" class="modal">
            <div className="modal-content">
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