import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
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
        />
      </div>
      <img
        className="logo"
        src="https://firebasestorage.googleapis.com/v0/b/ultimi-vineti.appspot.com/o/images%2Flogo.png?alt=media&token=71a44f09-56df-447a-a302-9bf00712ca46"
      />
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
      </div>
    </div>
  );
}

export default Header;
