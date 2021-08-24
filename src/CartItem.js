import React from "react";
import "./CartItem.css";

function CartItem() {
  return (
    <div className="cartItem">
      <img
        className="cartItemImage"
        src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fwine.png?alt=media&token=c5835d72-5459-4ea7-966f-055af9f3560e"
        alt=""
      />
      <div className="cartItemInfo">
        <h1 className="cartItemTitle">Stupino Barolo DOCG 2016</h1>
        <p className="cartItemOrigin">Vendanges Tardives, Alsace, France</p>
        <div className="flex">
          <div className="cartItemAmount">
            <button className="min">-</button>
            <p className="cartItemNumber">1</p>
            <button className="plus">+</button>
          </div>
          <p className="cartItemPrice">€ 10.50</p>
        </div>
      </div>
      <img
        className="deleteCartItem"
        src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcross.svg?alt=media&token=1a8a38b7-f359-4d50-935b-a50b66be42b5"
        alt="delete cart item"
      />
    </div>
  );
}

export default CartItem;
