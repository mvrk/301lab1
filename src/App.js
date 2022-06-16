import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import Modal from 'react-bootstrap/Modal'
import data from './data.json';
import './App.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;