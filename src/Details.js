import React, { useState } from "react";
import "./Details.css";
import { Link } from "react-router-dom";

function Details() {
  const [dot, setDot] = useState(1);
  const [imageUrl, setImageUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fwine.png?alt=media&token=c5835d72-5459-4ea7-966f-055af9f3560e"
  );
  const [amount, setAmount] = useState(1);

  function showImage1() {
    setDot(1);
    setImageUrl(
      "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fwine.png?alt=media&token=c5835d72-5459-4ea7-966f-055af9f3560e"
    );
  }
  function showImage2() {
    setDot(2);
    setImageUrl(
      "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FPorkIcon.svg?alt=media&token=2ece59fe-690c-4e67-b6d3-f8ad8efdaede"
    );
  }
  function showImage3() {
    setDot(3);
    setImageUrl(
      "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FbiodynamischIcon.svg?alt=media&token=be60b607-46d7-4cc4-94e2-2e5650af635e"
    );
  }

  function lessAmount() {
    if (amount == 1) {
      setAmount(1);
    } else {
      setAmount(amount - 1);
    }
  }

  function moreAmount() {
    setAmount(amount + 1);
  }

  return (
    <div className="details">
      <div className="wineDetails">
        <div className="winePhotos">
          <div className="photos">
            <img src={imageUrl} alt="wine image" />
          </div>
          <div className="dots">
            <div
              className={dot == 1 ? "dot selected" : "dot"}
              onClick={showImage1}
            ></div>
            <div
              className={dot == 2 ? "dot selected" : "dot"}
              onClick={showImage2}
            ></div>
            <div
              className={dot == 3 ? "dot selected" : "dot"}
              onClick={showImage3}
            ></div>
          </div>
        </div>
        <div className="wineInfo">
          <h2>Stupino Barolo DOCG 2016</h2>
          <p className="wineDescription">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
          <p className="price">€ 10.50</p>
          <div className="flex">
            <div className="amountSelector">
              <div className="amount">{amount}</div>
              <div className="selectors">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FmoreIcon.svg?alt=media&token=2206cc98-6e68-4fb4-9172-3f1fea2cc17c"
                  alt="more"
                  onClick={moreAmount}
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FlessIcon.svg?alt=media&token=30ba2369-a107-42e0-be15-821543bb2109"
                  alt="less"
                  onClick={lessAmount}
                />
              </div>
            </div>
            <button>Add to Cart</button>
          </div>
          <div className="goToInfo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FarrowDown.svg?alt=media&token=83c71a73-8474-47a7-b586-c212d353f2cd"
              alt="go to information"
            />
            <p>More Information</p>
          </div>
        </div>
      </div>
      <div className="bottomDivs">
        <Link to="/shop">
          <div className="backbutton">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FbackButton.svg?alt=media&token=8907882a-9c7a-4557-8ed9-dc5ba65a48c8"
              alt="back button"
            />
            <p>Back</p>
          </div>
        </Link>
        <div className="wineAttributes">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwineIcon1.svg?alt=media&token=791df593-e426-43ea-9de4-941c58f1a852"
            alt="icon 1"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwineIcon2.svg?alt=media&token=fd1b15f8-c02b-44ae-a0da-eec6f77d8fd4"
            alt="icon 2"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwineIcon3.svg?alt=media&token=5dc9cef6-ba0a-411e-87ba-e88569c75799"
            alt="icon 2"
          />
          <div className="wineColor"></div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FPorkIcon.svg?alt=media&token=2ece59fe-690c-4e67-b6d3-f8ad8efdaede"
            alt="icon 5"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FbiodynamischIcon.svg?alt=media&token=be60b607-46d7-4cc4-94e2-2e5650af635e"
            alt="icon 6"
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
