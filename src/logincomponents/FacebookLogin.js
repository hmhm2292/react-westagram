import React from "react";

class FacebookLogin extends React.Component {
  render() {
    return (
      <div className="facebookLogin">
        <button className="loginWithFacebookButton">
          <span className="facebookLogoImage">
            <img
              src="https://image.flaticon.com/icons/png/512/124/124010.png"
              alt="Facebook Logo"
            />
          </span>
          <a
            className="loginWithFacebookText"
            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522iqvm5l1ju1pxl450zkj1hov0641u8wps71ce0cay1kf72l8577w4o%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Db571f4e5-6433-4b37-9fa2-0c9067f68bd2&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522iqvm5l1ju1pxl450zkj1hov0641u8wps71ce0cay1kf72l8577w4o%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=en_US"
          >
            Log in with Facebook
          </a>
        </button>
      </div>
    );
  }
}

export default FacebookLogin;
