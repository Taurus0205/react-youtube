import React from "react";
import { NavLink } from "react-router-dom";
import "./Subscribe.scss";

// component
import Setting from "../Lib/Svg/Setting";
// images
import belle from "../../Assests/Images/belle.svg";
import emma from "../../Assests/Images/emma.svg";
import eunice from "../../Assests/Images/eunice.svg";
import gussie from "../../Assests/Images/gussie.svg";
import leah from "../../Assests/Images/leah.svg";
import nora from "../../Assests/Images/nora.svg";

function Subscribe() {
  return (
    <>
      <div className="subscription">
        <h2 className="subscription__header">Subscriptions</h2>
        <div className="subcription__inner">
          <NavLink className="subscription__link" to="/">
            <img
              className="subscription__img"
              src={gussie}
              alt="gussie"
              width={26}
              height={26}
            />
            <span className="subscription__span">Nora Francis</span>
          </NavLink>

          <NavLink className="subscription__link" to="/">
            <img
              className="subscription__img"
              src={nora}
              alt="nora"
              width={26}
              height={26}
            />
            <span className="subscription__span">Belle Briggs</span>
          </NavLink>

          <NavLink className="subscription__link" to="/">
            <img
              className="subscription__img"
              src={belle}
              alt="belle"
              width={26}
              height={26}
            />
            <span className="subscription__span">Eunice Cortez</span>
          </NavLink>

          <NavLink className="subscription__link" to="/">
            <img
              className="subscription__img"
              src={eunice}
              alt="eunice"
              width={26}
              height={26}
            />
            <span className="subscription__span">Emma Hanson</span>
          </NavLink>

          <NavLink className="subscription__link" to="/">
            <img
              className="subscription__img"
              src={emma}
              alt="emma"
              width={26}
              height={26}
            />
            <span className="subscription__span">Leah Berry</span>
          </NavLink>

          <NavLink className="subscription__link" to="/">
            <img
              className="subscription__img"
              src={leah}
              alt="leah"
              width={26}
              height={26}
            />
            <span className="subscription__span">Gussie Singleton</span>
          </NavLink>
        </div>

        <NavLink className="nav-link" to="/">
          <Setting />
          Setting
        </NavLink>
      </div>
    </>
  );
}

export default Subscribe;
