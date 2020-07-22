import React from "react";

import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__top">
            <p>Logo</p>
            
        </div>
        <div className="header__nav"></div>
      </Container>
    </header>
  );
};

export default Header;
