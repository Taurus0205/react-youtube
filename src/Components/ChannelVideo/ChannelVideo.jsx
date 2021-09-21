import React from "react";
import { NavLink } from "react-router-dom";

import "./ChannelVideo.scss";

function ChannelVideo() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const films = data.splice(0, 4);
  return (
    <>
      <div className="channel-video">
        <p className="channel-video__heading">Margaret Phelps videos</p>
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

export default ChannelVideo;
