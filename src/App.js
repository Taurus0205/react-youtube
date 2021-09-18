import "./App.scss";

// Components

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Subscribe from "./Components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Header />
      <div className="flex-column">
        <Navbar />
        <Subscribe />
      </div>
    </>
  );
}

export default App;
