import React from "react";

import Dollie from "../../Components/Dollie/Dollie";
import Recommended from "../../Components/Recommended/Recommended";
import Food from "../../Components/Food/Food";
function HomePage() {
  return (
    <>
      <div>
        <Dollie />
        <Recommended />
        <Food />
      </div>
    </>
  );
}

export default HomePage;
