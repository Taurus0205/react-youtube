import "./Header.scss";
import { NavLink } from "react-router-dom";

// images
import App from "../../Assests/Images/app.svg";
import Avatar from "../../Assests/Images/avatar.svg";
import Hamburger from "../../Assests/Images/hamburger.svg";
import Logo from "../../Assests/Images/logo.svg";
import Notifications from "../../Assests/Images/notifications.svg";
import Search from "../../Assests/Images/search.svg";
import Video from "../../Assests/Images/video.svg";

function Header() {
  return (
    <>
      <div className="header container">
        <button className="btn">
          <img
            className="header__hamburger"
            src={Hamburger}
            alt="hamburger"
            width={20}
            height={17}
          />
        </button>

        <NavLink to="/">
          <img
            className="header__logo"
            src={Logo}
            alt="youtube"
            width={116}
            height={25}
          />
        </NavLink>

        <div className="search-wrapper">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search"
          />
          <button className="btn" type="button">
            <img
              className="header__search-icon"
              src={Search}
              alt="search"
              width={19}
              height={19}
            />
          </button>
        </div>

        <div className="settings-wrapper">
          <button className="btn settings-wrapper__btn" type="button">
            <img src={Video} alt="video" width={27} height={20} />
          </button>

          <button className="btn settings-wrapper__btn" type="button">
            <img src={App} alt="youtube app" width={21} height={21} />
          </button>

          <button className="btn settings-wrapper__btn" type="button">
            <img
              src={Notifications}
              alt="notifications"
              width={22}
              height={26}
            />
          </button>
        </div>

        <button className="btn mobile-search" type="button">
          <img
            className="header__search-icon"
            src={Search}
            alt="search"
            width={19}
            height={19}
          />
        </button>

        <button className="btn settings-wrapper__btn" type="button">
          <img src={Avatar} alt="user" width={40} height={40} />
        </button>
      </div>
    </>
  );
}

export default Header;
