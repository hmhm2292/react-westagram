import React, { Component } from "react";
import InstagramLogo from "../../img/logo_text.png";

export class NavbarLeft extends Component {
  render() {
    return (
      <div className="navBarLeft">
        <span className="cameraLogo">
          <img
            src={
              "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            }
            alt={"Camera Logo"}
          />
        </span>
        <div className="splitBar"></div>
        <span className="instaLogo">
          <img src={InstagramLogo} alt="Instagram Logo" />
        </span>
      </div>
    );
  }
}

export default NavbarLeft;
