import React from "react";
import Welcome from "./Welcome";
import "./About.css";

function About() {
  function scrollDown() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="about">
      <div className="screenSize">
        <h2>About Us</h2>
        <Welcome />
        <div className="scrollDown" onClick={scrollDown}>
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
            <div className="form">
              <p className="title">E-mailadres</p>
              <input type="text" placeholder="naam@email.com" />
              <p className="title">Bericht</p>
              <textarea
                cols="65"
                rows="10"
                placeholder="Stel je vraag hier..."
              ></textarea>
              <input type="submit" value="verzenden" />
            </div>
          </div>
          <div className="rightSide">
            <div className="gegevens">
              <h2>Onze Gegevens</h2>
              <div className="emailadres">
                <p>ultimivineti@gmail.com</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FemailIcon.svg?alt=media&token=9b497508-8638-490d-9eae-185f90ad804c"
                  alt="email icon"
                />
              </div>
              <div className="telefoonnummer">
                <p>04 63 4542 90</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FphoneIcon.svg?alt=media&token=6902693e-de07-4327-8f53-8739a01fd1f0"
                  alt="phone icon"
                />
              </div>
            </div>
            <div className="wanneer">
              <h2>Wanneer kunnen we bij u leveren?</h2>
              <div className="wanneerRegio">
                <p className="dag">Maandag</p>
                <p className="regio">regio West-Vlaanderen & Oost-Vlaanderen</p>
              </div>
              <div className="wanneerRegio">
                <p className="dag">Dinsdag</p>
                <p className="regio">regio Antwerpen & Limburg</p>
              </div>
              <div className="wanneerRegio">
                <p className="dag">Woensdag</p>
                <p className="regio">Vlaams-Brabant, Waals-Brabant & Brussel</p>
              </div>
              <div className="wanneerRegio">
                <p className="dag">Donderdag</p>
                <p className="regio">regio Luik</p>
              </div>
              <div className="wanneerRegio">
                <p className="dag">Vrijdag</p>
                <p className="regio">regio Henegouwen & Namen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
