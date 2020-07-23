import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col >
            <div className="footer_nav">
              <NavLink to="/">Головна</NavLink>
              <NavLink to="/about-us">Візитівка</NavLink>
              <NavLink to="/news">Новини</NavLink>
              <NavLink to="/registration-info">Реєстрація до закладу</NavLink>
              <NavLink to="/parents-info">Батькам</NavLink>
              <NavLink to="/contacts">Контакти</NavLink>
            </div>
          </Col>
          <Col>
            <div className="footer_sites">
              <p>Корисні посилання:</p>
              <ul className="footer__sites-list">
                <li className="footer__list-item">
                  <a
                    href="https://mon.gov.ua/ua"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Міністерство oсвіти і науки, молоді та спорту України
                  </a>
                </li>
                <li className="footer__list-item">
                  <a
                    href="https://www.chernigiv-rada.gov.ua"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Офіційний веб-портал Чернігівської міської ради
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
