import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Restaurants from "./Components/Restaurants";
import Login from "./Components/Login";
import { LoginUser } from "./Interface/Utils";

export const CurrentUserContext = createContext<LoginUser>({
  email: "",
  password: "",
  isLoggedIn: false,
});

function App() {
  const [currentUser, setCurrentUser] = useState<LoginUser>({
    email: "",
    password: "",
    isLoggedIn: true,
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
