import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Registreren</h1>
      <form>
        <div className="flexForm">
          <div className="leftSide">
            <p className="inputTitle">Naam</p>
            <input type="text" name="name" placeholder="naam" />
            <p className="inputTitle">E-mailadres</p>
            <input type="text" name="email" placeholder="naam@gmail.com" />
            <p className="inputTitle">Wachtwoord</p>
            <input type="password" name="password" placeholder="wachtwoord" />
          </div>
          <div className="vl"></div>
          <div className="rightSide">
            <div className="flex">
              <div className="street">
                <p className="inputTitle">Straat</p>
                <input type="text" name="street" placeholder="straatnaam" />
              </div>
              <div className="number">
                <p className="inputTitle">Nummer</p>
                <input type="text" name="number" placeholder="1, 42, ..." />
              </div>
            </div>
            <div className="flex">
              <div className="postal">
                <p className="inputTitle">Postcode</p>
                <input type="text" name="postal" placeholder="1000" />
              </div>
              <div className="city">
                <p className="inputTitle">City</p>
                <input type="text" name="city" placeholder="stad" />
              </div>
              <div className="country">
                <p className="inputTitle">Land</p>
                <input type="text" name="country" placeholder="belgië, ..." />
              </div>
            </div>
            <div className="flex">
              <div className="phone">
                <p className="inputTitle">GSM-nummer</p>
                <input type="text" name="phone" />
              </div>
              <div className="birthdate">
                <p className="inputTitle">Geboortedatum</p>
                <div className="flex">
                  <input type="text" name="birthday" placeholder="dd" />
                  <input type="text" name="birthmonth" placeholder="mm" />
                  <input type="text" name="birthyear" placeholder="yyyy" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons flex">
          <p className="toLogin">
            Heb je al een account? <u>Log in!</u>
          </p>
          <input type="submit" value="Registreren" />
        </div>
      </form>
    </div>
  );
}

export default Register;
