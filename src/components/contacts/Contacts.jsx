import React from "react";
import "./Contacts.scss";
import { NavLink } from "react-router-dom";

function Contacts() {
  return (
    <div className="contacts">
      <NavLink to={"/contacts"} className={"nav-link"}>
        <h1>Контакти</h1>
        <p>Це сторінка з контактною інформацією.</p>

        <div className="contact-info">
          <h2>Наша адреса:</h2>
          <p>123 вулиця Прикладна, Місто</p>
        </div>

        <div className="contact-info">
          <h2>Наш email:</h2>
          <p>info@example.com</p>
        </div>

        <div className="contact-info">
          <h2>Телефон:</h2>
          <p>+1 234-567-890</p>
        </div>
      </NavLink>
    </div>
  );
}

export default Contacts;
