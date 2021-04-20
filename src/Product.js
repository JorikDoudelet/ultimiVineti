import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="productInfo">
        <div className="productAttributes">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwineIcon1.svg?alt=media&token=791df593-e426-43ea-9de4-941c58f1a852"
            alt="wine icon 1"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwineIcon2.svg?alt=media&token=fd1b15f8-c02b-44ae-a0da-eec6f77d8fd4"
            alt="wine icon 1"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwineIcon3.svg?alt=media&token=5dc9cef6-ba0a-411e-87ba-e88569c75799"
            alt="wine icon 1"
          />
        </div>
        <div className="wineColor"></div>
      </div>
      <div className="productContent">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fwine.png?alt=media&token=c5835d72-5459-4ea7-966f-055af9f3560e"
          alt="wine image"
        />
        <h3>Stupino Barolo DOCG 2016</h3>
        <p>Italy, Piemonte</p>
        <p className="price">€ 10.50</p>
      </div>
      <button className="productButton">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FarrowButton.svg?alt=media&token=e4c3f052-01da-41fd-bcdb-136b12172259"
          alt="go to productpage"
        />
      </button>
    </div>
  );
}

export default Product;
