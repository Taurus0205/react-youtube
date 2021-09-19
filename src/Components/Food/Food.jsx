import React from "react";
import { NavLink } from "react-router-dom";

import "./Food.scss";
import food from "../../Assests/Images/food.jpg";
// import example from "../../Assests/Images/example.jpg";

function Food() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const films = data.splice(0, 4);
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
          <span className="food__recommend-channel">
            Recommended channel for you
          </span>
        </NavLink>

        <ul className="dollie__list">
          {films.length > 0 &&
            films.map((row) => (
              <li className="dollie__item" key={row.id}>
                <NavLink className="dollie__item__img-wrapper" to="/">
                  <img
                    className="dollie__item__img"
                    src={row.url}
                    alt={row.title}
                    width={250}
                    height={150}
                  />
                  <span className="dollie__item__time-span">7:36</span>
                </NavLink>
                <span className="dollie__item__span">{row.title}</span>

                <div className="dollie__item__wrappper">
                  <span>240k views · 4 months ago</span>{" "}
                  <span>Food & Drink</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Food;
