import "./App.scss";

// Components

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Subscribe from "./Components/Subscribe/Subscribe";
import Dollie from "./Components/Dollie/Dollie";
import Recommended from "./Components/Recommended/Recommended";
import Food from "./Components/Food/Food";

function App() {
  return (
    <>
      <Header />
      <main className="main container">
        <div className="flex-column">
          <Navbar />
          <Subscribe />
        </div>
        <div>
          <Dollie />
          <Recommended />
          <Food />
        </div>
      </main>
    </>
  );
}

export default App;
