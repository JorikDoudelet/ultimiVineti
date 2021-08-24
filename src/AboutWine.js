import React, { useState } from "react";
import "./AboutWine.css";

function AboutWine() {
  const [tabsState, setTabsState] = useState(0);

  function showAroma() {
    setTabsState(0);
  }

  function showAfdronk() {
    setTabsState(1);
  }

  return (
    <div className="aboutWine">
      <h2>About this Wine</h2>
      <div className="aboutWineContent">
        <div className="aboutWineText">
          <div className="aboutWineTabs">
            <div
              className={
                tabsState == 0 ? "aboutWineTab selectedTab" : "aboutWineTab"
              }
              onClick={showAroma}
            >
              Aroma
            </div>
            <div
              className={
                tabsState == 1 ? "aboutWineTab selectedTab" : "aboutWineTab"
              }
              onClick={showAfdronk}
            >
              Afdronk
            </div>
          </div>
          <p className={tabsState == 0 ? "show" : "hide"}>
            Aroma ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo no sea takimata sanctus est Lorem
          </p>
          <p className={tabsState == 0 ? "hide" : "show"}>
            Afdronk ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo no sea takimata sanctus est Lorem
          </p>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fwine.png?alt=media&token=c5835d72-5459-4ea7-966f-055af9f3560e"
          alt="wine photo"
        />
      </div>
    </div>
  );
}

export default AboutWine;
