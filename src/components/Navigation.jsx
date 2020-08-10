import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/nav.css";

const groupNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__item" to="/">
        Головна
      </NavLink>
      <div className="nav__item group">
        Наші групи
        <ul className="nav__groups-list">
          {groupNumbers.map((number) => (
            <li key={number} className="nav__item">
              <NavLink to={`/group/${number}`}>Група №{number}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <NavLink className="nav__item" to="/news">
        Новини
      </NavLink>
      <NavLink className="nav__item" to="/registration-info">
        Реєстрація до закладу
      </NavLink>
      <NavLink className="nav__item" to="/parents-info">
        Батькам
      </NavLink>
      <NavLink className="nav__item" to="/contacts">
        Контакти
      </NavLink>
    </nav>
  );
};

export default Navigation;
