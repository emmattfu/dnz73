import React from "react";

import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Header, Footer, Aside } from "./components";
import {
  Home,
  Group,
  News,
  NewsDetails,
  Registration,
  Contacts,
  ParentsInfo,
} from "./pages";

import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <div className="content">
          <Row>
            <Col xs={8} className="content__main">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/group/:number" component={Group} />
                <Route exact path="/news" component={News} />
                <Route excat path="/news/:id" component={NewsDetails}/>
                <Route excat path="/registration-info" component={Registration}/>
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/parents-info" component={ParentsInfo} />
              </Switch>
            </Col>

            <Col xs={4} className="content__aside">
              <Aside />
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
