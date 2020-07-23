import React from "react";

import { Container } from "react-bootstrap";
import { Nav } from "./index";
import { FaYoutubeSquare, FaFacebookSquare } from 'react-icons/fa';

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

            <div className="header__icons">
            <a href="https://www.facebook.com/groups/1566022256752415" rel="noopener noreferrer"
                    target="_blank">
                <FaFacebookSquare className="nav__icon fb"/>
              </a>

              <a href="https://www.youtube.com/channel/UCcTJJXt3TBZzK4Ry5VeYKpQ" rel="noopener noreferrer"
                    target="_blank">
                <FaYoutubeSquare className="nav__icon youtube" />
              </a>
            </div>
          
          </div>

          <Nav />
        </div>
   
      </Container>
    </header>
  );
};

export default Header;
