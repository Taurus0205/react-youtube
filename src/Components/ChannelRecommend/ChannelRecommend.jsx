import React from "react";

import "./ChannelRecommend.scss";

// images
import flora from "../../Assests/Images/flora.svg";
import violet from "../../Assests/Images/violet.svg";
import philip from "../../Assests/Images/philip.svg";

function ChannelRecommend() {
  return (
    <>
      <div className="channel-recommend-wrapper">
        <p className="channel-recommend__heading">Recommended channel</p>
        <ul className="channel-recommend__list">
          <li className="channel-recommend__item">
            <img
              className="channel-recommend__img"
              src={flora}
              alt="flora"
              width={50}
              height={50}
            />
            <p className="channel-recommend__paragraph">Flora Benson</p>
          </li>

          <li className="channel-recommend__item">
            <img
              className="channel-recommend__img"
              src={violet}
              alt="violet"
              width={50}
              height={50}
            />
            <p className="channel-recommend__paragraph">Violet Cobb</p>
          </li>

          <li className="channel-recommend__item">
            <img
              className="channel-recommend__img"
              src={philip}
              alt="philip"
              width={50}
              height={50}
            />
            <p className="channel-recommend__paragraph">Phillip Mullins</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ChannelRecommend;
