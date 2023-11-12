import React, { useContext } from "react";
import "../Style/StyleLogin.css";
import "../Style/StyleBenvenuto.css";
import { CurrentUserContext } from "../App";
import Benvenuto from "./Benvenuto";
import FormLogin from "./FormLogin";

function Login() {
  const user = useContext(CurrentUserContext);

  return (
    <div className="select-page-container">
      {user.isLoggedIn ? <Benvenuto userDetails={user} /> : <FormLogin />}
    </div>
  );
}

export default Login;
