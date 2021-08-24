import React from "react";
import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import Wines from "./Wines";
import Shop from "./Shop";
import About from "./About";
import Detailpage from "./Detailpage";
import Cart from "./Cart";
import DeliveryCart from "./DeliveryCart";
import PaymentCart from "./PaymentCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/shop">
            <Header />
            <Shop />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route path="/profile">
            <Header />
            <h1>I am the profile page</h1>
          </Route>
          <Route path="/shop">
            <Header />
            <h1>I am the shop</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Cart />
          </Route>
          <Route path="/detail">
            <Header />
            <Detailpage />
          </Route>
          <Route path="/deliveryCart">
            <Header />
            <DeliveryCart />
          </Route>
          <Route path="/paymentCart">
            <Header />
            <PaymentCart />
          </Route>
          <Route path="/register">
            <Header />
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Welcome />
            <Wines />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
