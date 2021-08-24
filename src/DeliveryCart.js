import React from "react";
import "./DeliveryCart.css";
import { Link } from "react-router-dom";

function DeliveryCart() {
  return (
    <div className="deliveryCartSmall">
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
        <p className="sameAddressText">Nieuwstraat 713, 1000 Brussel, België</p>
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
        <div className="flex">
          <Link to="/checkout">
            <p className="back">back</p>
          </Link>
          <Link to="/paymentCart">
            <button className="rightCartBuyButton">Betalen</button>
          </Link>
        </div>
      </form>
      <Link to="checkout">
        <p className="screenToBig">Go back to checkout</p>
      </Link>
    </div>
  );
}

export default DeliveryCart;
