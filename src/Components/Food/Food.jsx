import React from "react";
import { NavLink } from "react-router-dom";

import food from "../../Assests/Images/food.jpg";
import example from "../../Assests/Images/example.jpg";

function Food() {
  return (
    <>
      <div className="food">
        <NavLink className="dollie__link" to="/">
          <img
            className="dollie__img"
            src={food}
            alt="gussie"
            width={50}
            height={50}
          />
          <span className="dollie__span">Food & Drink</span>
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
              <span className="dollie__item__time-span">7:36</span>
            </NavLink>
            <span className="dollie__item__span">Astronomy Or Astrology</span>

            <div className="dollie__item__wrappper">
              <span>240k views · 4 months ago</span> <span>Food & Drink</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Food;
