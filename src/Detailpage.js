import React from "react";
import "./Detailpage.css";
import Details from "./Details";
import AboutWine from "./AboutWine";
import Wijnmaker from "./Wijnmaker";

function Detailpage() {
  return (
    <div className="detailpage">
      <div className="pageIndicator">
        <div className="pageNumber currentPage">
          <hr></hr>01
        </div>
        <div className="pageNumber">02</div>
        <div className="pageNumber">03</div>
        <div className="pageNumber">04</div>
      </div>
      <Details />
      <AboutWine />
      <Wijnmaker />
    </div>
  );
}

export default Detailpage;
