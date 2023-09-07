import React from "react";
import "./materials.scss";
import { NavLink } from "react-router-dom";

function Materials() {
  return (
    <div className="materials">
      <NavLink to={"/materials"} className={"nav-link"}>
        <h1>Матеріали</h1>
        <p>Це сторінка з матеріалами та ресурсами.</p>
      </NavLink>
    </div>
  );
}

export default Materials;
