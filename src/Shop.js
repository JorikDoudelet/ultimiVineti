import "./Shop.css";
import React, { useState } from "react";
import Product from "./Product";

function Shop() {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [filter, setFilter] = useState(false);

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

  const toggleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div className="shop">
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
      <div className="allWines">
        <Product />
        <Product />
        {filter ? (
          <div className="filter" onClick={toggleFilter}>
            <p>niet</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FfilterIcon.svg?alt=media&token=48806db2-ef46-4bd0-983e-9fb79d3b2b42"
              alt="filter"
            />
          </div>
        ) : (
          <div className="filter" onClick={toggleFilter}>
            <p>filter</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FfilterIcon.svg?alt=media&token=48806db2-ef46-4bd0-983e-9fb79d3b2b42"
              alt="filter"
            />
          </div>
        )}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Shop;
