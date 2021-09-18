import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import Home from "../Lib/Svg/Home";
import Favourites from "../Lib/Svg/Favourites";
import Games from "../Lib/Svg/Games";
import History from "../Lib/Svg/History";
import Library from "../Lib/Svg/Library";
import Liked from "../Lib/Svg/Liked";
import Music from "../Lib/Svg/Music";
import Showmore from "../Lib/Svg/Showmore";
import Subscriptions from "../Lib/Svg/Subscriptions";
import Trending from "../Lib/Svg/Trending";
import Watchlater from "../Lib/Svg/Watchlater";

function Navbar() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="nav-first">
          <NavLink className="nav-link" to="/">
            <Home />
            Home
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Trending />
            Trending
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Subscriptions />
            Subscription
          </NavLink>
        </div>

        <div className="nav-second">
          <NavLink className="nav-link" to="/">
            <Library />
            Library
          </NavLink>

          <NavLink className="nav-link" to="/">
            <History />
            History
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Watchlater />
            Watch later
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Favourites />
            Favourites
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Liked />
            Liked videos
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Music />
            Music
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Games />
            Games
          </NavLink>

          <NavLink className="nav-link" to="/">
            <Showmore />
            Show more
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
