import React from "react";
import "../Style/StyleHome.css";
import "../Style/StyleButton.css";
import Button from "./Button";

import logo from "../manginado-romano-logo.png";

function Home() {
  return (
    <div className="home-container">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <p>
        <b>Vuoi Mangiare bene, mangia romano</b>
      </p>
      <Button
        className="button-link"
        title="Ristoranti"
        link="restaurants"
      ></Button>
    </div>
  );
}

export default Home;
