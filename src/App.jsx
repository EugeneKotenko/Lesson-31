import React from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import { Outlet, Router } from "react-router-dom";
import "./app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Main />
    </div>
  );
};

export default App;
