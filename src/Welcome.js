import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcomeContent">
        <video controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/videos%2FHow%20Wine%20Is%20Made.mp4?alt=media&token=ca80345e-fd59-4a76-9a2b-7fec9507cd66" />
        </video>
        <div className="welcomeText">
          <h1>Welcome to Ultimi Vineti</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
            <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure <br />
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit <br />
            anim id est laborum.
          </p>
          <button>Shop</button>
        </div>
      </div>
      <div className="socials">
        <Link to={{ pathname: "https://www.facebook.com" }} target="_blank">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Ffacebook.svg?alt=media&token=32350259-d076-41b5-8693-058221235186"
            alt="link to facebook page"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FfacebookHover.svg?alt=media&token=7356abbd-791c-4eb2-ae21-2fe7a4083af8")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Ffacebook.svg?alt=media&token=32350259-d076-41b5-8693-058221235186")
            }
          />
        </Link>
        <Link to={{ pathname: "https://www.instagram.com" }} target="_blank">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Finstagram.svg?alt=media&token=78733f44-7ce9-454d-8363-a67fa5d1c997"
            alt="link to instagram page"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Finstagram%20(1).svg?alt=media&token=283f9a30-73a1-4282-85c8-2e647cc93b5f")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Finstagram.svg?alt=media&token=78733f44-7ce9-454d-8363-a67fa5d1c997")
            }
          />
        </Link>
        <Link to={{ pathname: "https://www.twitter.com" }} target="_blank">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Ftwitter.svg?alt=media&token=9569635b-9818-4f79-849a-26389094dd59"
            alt="link to instagram page"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2FtwitterHover.svg?alt=media&token=b6022b8b-fa49-42c1-a7eb-7f6abd1d9a8b")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Ftwitter.svg?alt=media&token=9569635b-9818-4f79-849a-26389094dd59")
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
