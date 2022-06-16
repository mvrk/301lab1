import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.js';
import SelectedBeast from "./SelectedBeast.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      description: ''
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };
  handleOnShowModal = (beast, descrip) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
      description: descrip
    });
  };


  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer />
        <SelectedBeast
          showModal={this.state.showModal}
          onHide={this.handleOnHide}
          selectedBeast={this.state.selectedBeast}
          description={this.state.description}
        />
      </>
    );
  }
}

export default App;