import React from "react";
import { NavLink } from "react-router-dom";
import "./Dollie.scss";

import gussie from "../../Assests/Images/gussie.svg";
// import example from "../../Assests/Images/example.jpg";

function Dollie() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const films = data.splice(0, 8);
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
          {films.length > 0 &&
            films.map((row) => (
              <li className="dollie__item" key={row.id}>
                <NavLink className="dollie__item__img-wrapper" to="/video">
                  <img
                    className="dollie__item__img"
                    src={row.url}
                    alt={row.title}
                    width={250}
                    height={150}
                  />
                  <span className="dollie__item__time-span">4:15</span>
                </NavLink>
                <span className="dollie__item__span">{row.title}</span>

                <div className="dollie__item__wrappper">
                  <span>80k views · 3 days ago</span> <span>Dollie Blair</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Dollie;
