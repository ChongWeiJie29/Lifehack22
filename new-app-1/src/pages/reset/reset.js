import "../../styles/reset.css";
function Reset() {
  return (
    <div className="App">
      <h2 id="email_title">Email</h2>
      <p>Enter your email to reset password.</p>
      <input type="textbox" placeholder="Email Address" />
      <br></br>
      <button>Send Link</button>
    </div>
  );
}

export default Reset;
