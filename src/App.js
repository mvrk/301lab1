import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import './App.js';
import SelectedBeast from "./SelectedBeast.js";
import { Form, Button, ListGroup } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      description: '',
      howToSort: '',
      sortedData: data
    };
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };
  handleOnShowModal = (hornedBeast) => {
    this.setState({
      showModal: true,
      selectedBeast: hornedBeast,

    });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   let selected = event.target.selected.value;
  //   this.setState({
  //     howToSort: selected
  //   });
  // };

  handleSelect = (event) => {
    event.preventDefault();
    let selected = event.target.value;

    if (selected === 1) {
      let newData = data.filter(hornedBeast => hornedBeast.horns === 1);
      this.setState({
        sortedData: newData
      });
    } else if (selected === 2) {
      let newData = data.filter(hornedBeast => hornedBeast.horns === 2);
      this.setState({
        sortedData: newData
      });
    }
    else if (selected === 3) {
      let newData = data.filter(hornedBeast => hornedBeast.horns === 3);
      this.setState({
        sortedData: newData
      });
    } else if (selected === 100) {
      let newData = data.filter(hornedBeast => hornedBeast.horns === 100);
      this.setState({
        sortedData: newData
      });
    }
    else {
      // if "all" is selected
      this.setState({
        sortedData: data
      });
    }
  }

  render() {
    console.log(this.state.sortedData);
    return (
      <>
        <Header />
        <Form.Group>
          <h2>Horn numbers</h2>
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
        <Main
          data={this.state.data}
          handleOnShowModal={this.handleOnShowModal}
          handleOnHide={this.handleOnHide}
        />
        <Footer />
        <SelectedBeast
          showModal={this.state.showModal}
          handleOnHide={this.handleOnHide}
          selectedBeast={this.state.selectedBeast}
          description={this.state.description}
        />
      </>
    );
  }
}


export default App;