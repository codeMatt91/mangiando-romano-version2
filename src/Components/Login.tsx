import React, { useContext } from "react";
import "../Style/StyleLogin.css";
import "../Style/StyleBenvenuto.css";
import { CurrentUserContext } from "../App";
import Benvenuto from "./Benvenuto";

function Login() {
  const user = useContext(CurrentUserContext);

  return (
    <div className="select-page-container">
      {user.isLoggedIn ? "Ciccio" : <Benvenuto userDetails={user} />}
    </div>
  );
}

export default Login;
