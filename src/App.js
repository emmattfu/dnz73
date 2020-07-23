import React from 'react'

import {Switch, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {Header, Footer} from './components'
import {Home, AboutUs, News, Registration, Contacts, ParentsInfo} from "./pages"


import './styles/styles.css';



function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about-us" component={AboutUs}/>
            <Route exact path="/news" component={News}/>
            <Route exact path="/registration-info" component={Registration}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/parents-info" component={ParentsInfo}/>
          </Switch>
        </Container>  
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
