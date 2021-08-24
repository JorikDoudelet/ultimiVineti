import React from "react";
import "./PaymentCart.css";
import { Link } from "react-router-dom";

function PaymentCart() {
  return (
    <div className="paymentCartSmall">
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
            <input type="text" className="date" placeholder="14/04/2022" />
          </div>
          <div className="cvc">
            <h3>CVC</h3>
            <input type="text" className="cvcNumber" />
          </div>
        </div>
        <div className="flex">
          <Link to="/deliveryCart">
            <p className="back">back</p>
          </Link>
          <button className="rightCartBuyButton">Betalen</button>
        </div>
      </form>
      <Link to="checkout">
        <p className="screenToBig">Go back to checkout</p>
      </Link>
    </div>
  );
}

export default PaymentCart;
