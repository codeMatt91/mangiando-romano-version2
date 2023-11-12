import React from "react";
import { LoginUser } from "../Interface/Utils";
import "../Style/StyleBenvenuto.css";

type BenvenutoProps = {
  userDetails: LoginUser;
};

function Benvenuto({ userDetails }: BenvenutoProps) {
  return (
    <div className="benvenuto-container">
      <div>
        <h2>
          Benvenuto{" "}
          {userDetails.email ? userDetails.email?.split("@")[0] : "Chicco"}
        </h2>
      </div>
      <p>
        Se stai cercando i ristoranti migliori della tua zona, sei nel posto
        giusto. Esplora la sezione Ristoranti per trovare quello che fa per te.
      </p>
      <div>Buon Divertimento</div>
    </div>
  );
}

export default Benvenuto;
