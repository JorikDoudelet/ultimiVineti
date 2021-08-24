import React, { useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const [rightCart, setRightCart] = useState(0);

  function showPaymentCart() {
    setRightCart(1);
  }

  return (
    <div className="cart">
      <div className="leftCart">
        <h2>Winkelwagen</h2>
        <div className="scrollItems">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="betalenDiv">
          <div className="totalPrice">
            <p>Total:</p>
            <p className="price">€ 24.50</p>
          </div>
          <Link to="/deliveryCart">
            <button className="leftCartBuyButton">Betalen</button>
          </Link>
        </div>
      </div>
      <div
        className={
          rightCart == 1
            ? "rightCart deliveryCart hide"
            : "rightCart deliveryCart"
        }
      >
        <form>
          <h1>Leveringsmethode</h1>
          <h3>Leveringsadres</h3>
          <div class="radio">
            <label>
              <input type="radio" name="deliveryAddress" value="SameAddress" />{" "}
              Zelfde leveringsadres als profiel
              <span></span>
            </label>
          </div>
          <p className="sameAddressText">
            Nieuwstraat 713, 1000 Brussel, België
          </p>
          <div class="radio">
            <label>
              <input type="radio" name="deliveryAddress" value="otherAddress" />{" "}
              Ander leveringsadres
              <span></span>
            </label>
          </div>
          <div className="differentAddress">
            <input type="text" className="street" placeholder="straatnaam" />
            <input type="text" className="number" placeholder="1, 43" />
            <input type="text" className="postal" placeholder="1000" />
            <input type="text" className="city" placeholder="stad" />
            <input type="text" className="country" placeholder="belgië, ..." />
          </div>
          <div className="flex">
            <label className="checkbox">
              <input type="checkbox" />
              <span>Verpak als geschenk</span>
            </label>
          </div>
          <p className="rightCartBuyButton" onClick={showPaymentCart}>
            Betalen
          </p>
        </form>
      </div>
      <div
        className={
          rightCart == 0
            ? "rightCart paymentCart hide"
            : "rightCart paymentCart"
        }
      >
        <form>
          <h1>Betaling</h1>
          <h3>Betalingswijze</h3>
          <div className="paymentIcons">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FmaestroLogo.png?alt=media&token=58b356e4-16c2-446f-83d0-f8e6d17235e0"
              alt="pay with maestrocard"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FmastercardLogo.png?alt=media&token=9a3ed7ed-64d2-4952-b505-a5a6166ee562"
              alt="pay with mastercard"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FpaypalLogo.png?alt=media&token=893f6322-9906-4642-bfe7-2a2aa230c7b8"
              alt="pay with paypal"
            />
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="deliveryAddress" value="otherAddress" />{" "}
              Betalen bij levering
              <span></span>
            </label>
          </div>
          <h3>KaartNummer</h3>
          <input
            type="text"
            className="cardNumber"
            placeholder="2341 / 3234 / 2442 / 6876"
          />
          <div className="flex">
            <div className="vervaldatum">
              <h3>Vervaldatum</h3>
              <input
                type="text"
                className="cardNumber"
                placeholder="14/04/2022"
              />
            </div>
            <div className="cvc">
              <h3>CVC</h3>
              <input type="text" className="cvcNumber" />
            </div>
          </div>

          <button className="rightCartBuyButton">Betalen</button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
