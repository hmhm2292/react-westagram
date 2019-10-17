import React from "react";

class GetTheApp extends React.Component {
  render() {
    return (
      <div className="downloadApp">
        <p className="getTheApp">Get the App</p>

        <div className="appDownloadImage">
          <a
            className="appleDownload"
            href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
          >
            <img
              src="https://i1.wp.com/www.mustique-island.com/app/uploads/2018/03/download-on-app-store-png-click-the-qr-code-to-show-the-download-link-800.png?fit=800%2C263&ssl=1"
              alt="IOS App Download"
            />
          </a>
          <a
            className="androidDownload"
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXSTD9WAEAAEW9BQX14ZN4MTT0NCC%26utm_content%3Dlo%26utm_medium%3Dbadge"
          >
            <img
              src="https://www.sccpre.cat/mypng/full/360-3604061_lifesaver-is-available-as-a-free-app-for.png"
              alt="Android App Download"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default GetTheApp;
