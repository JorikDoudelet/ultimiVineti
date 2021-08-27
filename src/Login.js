import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="backButton">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcross.svg?alt=media&token=1a8a38b7-f359-4d50-935b-a50b66be42b5"
          alt="back button"
        />
      </div>
      <div className="flex">
        <div className="rightSide">
          <form>
            <h1>Login</h1>
            <p className="inputTitle">E-mailadres</p>
            <input type="text" name="email" placeholder="naam@gmail.com" />
            <p className="inputTitle">Wachtwoord</p>
            <input type="password" name="password" placeholder="wachtwoord" />
            <input type="submit" value="Login" />
          </form>
          <p className="toRegister">
            Nog geen account? <u>Registreer hier!</u>
          </p>
        </div>
        <div className="leftSide">
          <h2>Why should you create an account?</h2>
          <div className="reasons">
            <div className="flex">
              <div className="indicator"></div>
              <p className="reason">10% discount on your first order</p>
            </div>
            <div className="flex">
              <div className="indicator"></div>
              <p className="reason">personalized recommendations</p>
            </div>
            <div className="flex">
              <div className="indicator"></div>
              <p className="reason">early access to upcoming events</p>
            </div>
            <div className="flex">
              <div className="indicator"></div>
              <p className="reason">many more...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
