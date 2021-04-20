import React, { useState } from "react";
import "./Wines.css";
import Product from "./Product";

function Wines() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const handleToggle1 = () => {
    setToggle1(true);
    setToggle2(false);
    setToggle3(false);
  };
  const handleToggle2 = () => {
    setToggle1(false);
    setToggle2(true);
    setToggle3(false);
  };
  const handleToggle3 = () => {
    setToggle1(false);
    setToggle2(false);
    setToggle3(true);
  };

  return (
    <div className="wines">
      <h2>Our Wines</h2>
      <div className="toggles">
        <p
          className={toggle1 ? "toggleWines selectedToggle" : "toggleWines"}
          onClick={handleToggle1}
        >
          Recommended
        </p>
        <p
          className={toggle2 ? "toggleWines selectedToggle" : "toggleWines"}
          onClick={handleToggle2}
        >
          Most Popular
        </p>
        <p
          className={toggle3 ? "toggleWines selectedToggle" : "toggleWines"}
          onClick={handleToggle3}
        >
          Newest
        </p>
      </div>
      <div className="showWines">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Wines;
