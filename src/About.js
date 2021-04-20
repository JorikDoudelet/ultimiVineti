import React from "react";
import Welcome from "./Welcome";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="screenSize">
        <h2>About Us</h2>
        <Welcome />
        <div className="scrollDown">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FarrowDown.svg?alt=media&token=83c71a73-8474-47a7-b586-c212d353f2cd"
            alt="arrow down"
          />
          <p>CONTACTEER ONS</p>
        </div>
      </div>
      <div className="screenSize">
        <div className="contact">
          <div className="vragen">
            <h2>Vraag over de wijnen? Stel ze hier!</h2>
            <p className="title">E-mailadres</p>
            <input type="text" placeholder="naam@email.com" />
            <p className="title">Bericht</p>
            <textarea
              cols="55"
              rows="10"
              placeholder="Stel je vraag hier..."
            ></textarea>
            <input type="submit" />
          </div>
          <div className="rightSide">
            <div className="gegevens"></div>
            <div className="wanneer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
