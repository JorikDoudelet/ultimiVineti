import React, { useState } from "react";
import "./Wijnmaker.css";

function Wijnmaker() {
  const [dot, setDot] = useState(1);
  const [imageUrl, setImageUrl] = useState(
    "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwijnmakerLocation.svg?alt=media&token=67b6efbb-f4f9-467d-b0e9-dd57f820feb3"
  );

  function showImage1() {
    setDot(1);
    setImageUrl(
      "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FwijnmakerLocation.svg?alt=media&token=67b6efbb-f4f9-467d-b0e9-dd57f820feb3"
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

  return (
    <div className="wijnmaker">
      <h2>Over De Wijnmaker</h2>
      <div className="wijnmakerContent">
        <div className="wijnmakerText">
          <div className="wijnmakerTitel">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Ficonfinder_Bars__Coffeeshops_2_753965.svg?alt=media&token=dbb10c5c-fe03-4766-a5ce-2a44be356619"
              alt="over de wijnmaker"
            />
            <h3>wijnmaker</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <div className="wijnmakerImages">
            <div className="wijnmakerImage"></div>
            <div className="wijnmakerImage"></div>
            <div className="wijnmakerImage"></div>
          </div>
        </div>
        <div className="wijnmakerPhotos">
          <div className="photos">
            <img src={imageUrl} alt="location image" />
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
      </div>
    </div>
  );
}

export default Wijnmaker;
