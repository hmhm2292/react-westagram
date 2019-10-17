import React from "react";
import InstagramLogo from "../img/logo_text.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src={InstagramLogo} alt="Instagram Logo" />
      </div>
    );
  }
}

export default Logo;
