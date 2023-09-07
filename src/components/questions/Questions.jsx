import React from "react";
import "./Questions.scss";
import { NavLink } from "react-router-dom";

function Questions() {
  return (
    <div className="questions">
      <NavLink to={"/questions"} className={"nav-link"}>
        <h1>Питання</h1>
        <p>Це сторінка з питаннями та відповідями.</p>
        <div className="question">
          <p>
            Для інших питань ви можете зв'язатися з нами за допомогою контактної
            інформації на сторінці "Контакти".
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default Questions;
