import React from "react";
import { NavLink } from "react-router-dom";
import "./ChannelNav.scss";

import search from "../../Assests/Images/search.svg";

function ChannelNav() {
  return (
    <>
      <div className="channel-nav">
        <ul className="channel-nav__list">
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              Videos
            </NavLink>
          </li>
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              Playlists
            </NavLink>
          </li>
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              Channels
            </NavLink>
          </li>
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              Discussion
            </NavLink>
          </li>
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              About
            </NavLink>
          </li>
          <li className="channel-nav__item">
            <NavLink className="channel-nav__link" to="/">
              <img src={search} alt="search" width={19} height={19} />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ChannelNav;
