import React from "react";
import "./ChannelMain.scss";

import channelImg from "../../Assests/Images/channel-img.jpg";

function ChannelMain() {
  return (
    <>
      <div className="channel-main">
        <div className="channel-main__img-wrapper">
          <img
            className="channel-main__img"
            src={channelImg}
            alt="just anything"
            width={540}
            height={250}
          />
          <span className="channel-main__time-span">7:25</span>
        </div>
        <div className="channel-main__info-wrapper">
          <p className="channel-main__heading">
            Choosing The Best Audio Player Software For Your Computer
          </p>
          <p className="channel-main__paragraph">
            Your cheap internet-based banner advertising will become one of the
            sought for ads there are. Today, the world of Internet advertising
            is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles
            A common medium for advertising on the Internet is the use of banner
            ads.
          </p>
          <p className="channel-main__view-paragraph">
            11k views · 6 months ago
          </p>
        </div>
      </div>
    </>
  );
}

export default ChannelMain;
