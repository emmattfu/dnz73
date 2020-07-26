import React from "react";

import { Container } from "react-bootstrap";
import { Nav } from "./index";

import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__top">
            <div className="header__logo">
              <p>Logo</p>
            </div>
            <div className="header__nav">
              <p className="header__name">Чернігівський дошкільний навчальний заклад № 73 <br /> Чернігівської міської ради Чернігівської області</p>
            </div>
          
          </div>

          <Nav />
        </div>
   
      </Container>
    </header>
  );
};

export default Header;
