import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";

// Components

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Subscribe from "./Components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Header />
      <main className="main container">
        <div className="flex-column">
          <Navbar />
          <Subscribe />
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/channel" component={Channel} exact />
        </Switch>
      </main>
    </>
  );
}

export default App;
