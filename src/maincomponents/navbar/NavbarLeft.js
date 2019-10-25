import React from "react";
import InstagramLogo from "../../img/logo_text.png";
import { withRouter } from "react-router-dom";

function NavbarLeft(props) {
  return (
    <div className="navBarLeft">
      <span className="cameraLogo">
        <button
          onClick={() => {
            localStorage.removeItem("first-token");
            props.history.push("/");
          }}
        >
          <img
            src={
              "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            }
            alt={"Camera Logo"}
          />
        </button>
      </span>
      <div className="splitBar"></div>
      <span className="instaLogo">
        <img src={InstagramLogo} alt="Instagram Logo" />
      </span>
    </div>
  );
}

export default withRouter(NavbarLeft);
