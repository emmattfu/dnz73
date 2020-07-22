import React from 'react';

import {Header, Footer} from './components'

import './styles/styles.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Container>
          COntent
        </Container>  
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
