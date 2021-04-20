import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="header">
      {selected === 0 && (
        <div className="menu">
          <img
            className="menu"
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fmenu.svg?alt=media&token=875896e1-263c-461f-ab5c-31518a781fcf"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fmenu_hover.svg?alt=media&token=8eb41f52-c8b5-4606-ab92-209d143951a6")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fmenu.svg?alt=media&token=875896e1-263c-461f-ab5c-31518a781fcf")
            }
            onClick={() => setSelected(1)}
          />
        </div>
      )}
      {selected === 1 && (
        <div className="menuClicked">
          <img
            className="cross"
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcross.svg?alt=media&token=1a8a38b7-f359-4d50-935b-a50b66be42b5"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcross_hover.svg?alt=media&token=97a326a4-98d9-453c-8be8-f1149a9dea5f")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcross.svg?alt=media&token=1a8a38b7-f359-4d50-935b-a50b66be42b5")
            }
            onClick={() => setSelected(0)}
          />
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
        </div>
      )}
      <Link to="/">
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Flogo.svg?alt=media&token=a09b2ac6-b418-472e-b9ec-6137e3466112"
        />
      </Link>
      <div className="rightNav">
        <img
          className="search"
          src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fsearch.svg?alt=media&token=7135fc43-c5a4-488f-af10-1caab7a951f8"
          onMouseOver={(e) =>
            (e.currentTarget.src =
              "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fsearch_hover.svg?alt=media&token=78f15910-0a39-4f16-a8fa-f30e6a651283")
          }
          onMouseOut={(e) =>
            (e.currentTarget.src =
              "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fsearch.svg?alt=media&token=7135fc43-c5a4-488f-af10-1caab7a951f8")
          }
        />
        <Link to="/profile">
          <img
            className="profile"
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fprofile.svg?alt=media&token=edcceb71-ce83-4dc9-ba56-9ab5087656ed"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fprofile_hover.svg?alt=media&token=7fff9fe4-0d93-436f-9f0d-b2d4f6994281")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fprofile.svg?alt=media&token=edcceb71-ce83-4dc9-ba56-9ab5087656ed")
            }
          />
        </Link>
        <Link to="/checkout">
          <img
            className="cart"
            src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcart.svg?alt=media&token=79d1fa65-74f2-4701-a363-c03d5adb7ce5"
            onMouseOver={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcart_hover.svg?alt=media&token=4c24aaf9-f8a0-4a5c-a3b7-5e395e421c44")
            }
            onMouseOut={(e) =>
              (e.currentTarget.src =
                "https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Fcart.svg?alt=media&token=79d1fa65-74f2-4701-a363-c03d5adb7ce5")
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
