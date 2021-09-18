import React from "react";
import { NavLink } from "react-router-dom";
import "./Dollie.scss";

import gussie from "../../Assests/Images/gussie.svg";
import example from "../../Assests/Images/example.jpg";

function Dollie() {
  return (
    <>
      <div className="dollie">
        <NavLink className="dollie__link" to="/">
          <img
            className="dollie__img"
            src={gussie}
            alt="gussie"
            width={50}
            height={50}
          />
          <span className="dollie__span">Dollie Blair</span>
        </NavLink>

        <ul className="dollie__list">
          <li className="dollie__item">
            <NavLink className="dollie__item__img-wrapper" to="/">
              <img
                className="dollie__item__img"
                src={example}
                alt="example"
                width={250}
                height={150}
              />
              <span className="dollie__item__time-span">4:15</span>
            </NavLink>
            <span className="dollie__item__span">
              A Brief History Of Creation
            </span>

            <div className="dollie__item__wrappper">
              <span>80k views · 3 days ago</span> <span>Dollie Blair</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dollie;
