import React from "react";
import "../App.css";
import "../Style/StyleRestautants.css";
import data from "../Data/data.json";

function Restaurants() {
  return (
    <div className="select-page-container ">
      <div className="restaurants-container">
        {data.map((el, index) => (
          <div
            key={index}
            className="card-restaurant"
          >
            <div>{el.nome}</div>
            <div className="card-content">
              <div className="card-img"></div>
              <div className="card-info">
                <div>
                  Tipologia :{el.tipologia}
                </div>
                <div>Voto: {el.voto}</div>
                <div className="address">
                  <div>Via/P.za:</div>

                  <div>{el.indirizzo}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
