import React from "react";
import { NavLink } from "react-router-dom";
import "./Recommended.scss";

import example from "../../Assests/Images/example.jpg";

function Recommended() {
  return (
    <>
      <div className="dollie">
        <NavLink className="dollie__link" to="/">
          <span className="dollie__span">Recommended</span>
        </NavLink>

        <ul className="dollie__list">
          <li className="dollie__item">
            <NavLink className="dollie__item__img-wrapper" to="/">
              <img
                className="dollie__item__img"
                src={example}
                alt="example"
                width={540}
                height={250}
              />
              <span className="dollie__item__time-span">3:40</span>
            </NavLink>
            <span className="dollie__item__span">
              Dude You Re Getting A Telescope
            </span>

            <div className="dollie__item__wrappper">
              <span>34k views · 5 months ago</span> <span>Gussie French</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Recommended;
