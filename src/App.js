import React from "react";
import Header from './Header.js';
import Main from '.Main.js';
import '/App.js';

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main/>
        <footer>Rui Guo@ Code Fellows 2022<footer/>
      </>
    );
  }
}

export default App;