import "./ChannelUser.scss";

import margaret from "../../Assests/Images/margaret.svg";
import notifications from "../../Assests/Images/notifications.svg";
function ChannelUser() {
  return (
    <>
      <div className="channel-user-wrapper">
        <div className="channel-user__info-wrapper">
          <img
            className="channel-user__user-img"
            src={margaret}
            alt="margaret"
            width={80}
            height={80}
          />
          <div className="channel-user-info__inner">
            <p className="channel-user__user-name">Margaret Phelps</p>
            <p className="channel-user__user-subscribed">245K subscribed</p>
          </div>
        </div>

        <div className="channel-user__subscribe-wrapper">
          <button className="btn" type="button">
            <img
              src={notifications}
              alt="notifications"
              width={22}
              height={26}
            />
          </button>

          <button className="subscribe-btn" type="submit">
            Subscribe 2.3m
          </button>
        </div>
      </div>
    </>
  );
}

export default ChannelUser;
