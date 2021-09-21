import React from "react";
import { NavLink } from "react-router-dom";
import "./Recommended.scss";

// import example from "../../Assests/Images/example.jpg";

function Recommended() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const films = data.splice(0, 4);
  return (
    <>
      <div className="recommended">
        <NavLink className="recommended__link" to="/">
          <span className="recommended__span">Recommended</span>
        </NavLink>

        <ul className="recommended__list">
          {films.length > 0 &&
            films.map((row) => (
              <li className="recommended__item" key={row.id}>
                <NavLink className="recommended__item__img-wrapper" to="/video">
                  <img
                    className="recommended__item__img"
                    src={row.url}
                    alt={row.title}
                    width={540}
                    height={250}
                  />
                  <span className="recommended__item__time-span">3:40</span>
                </NavLink>
                <span className="recommended__item__span">{row.title}</span>

                <div className="recommended__item__wrappper">
                  <span>34k views · 5 months ago</span>
                  <span>Gussie French</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Recommended;
