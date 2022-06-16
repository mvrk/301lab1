import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: data

    };
  };
  render() {
    return (
      <main>
        {
          this.state.allBeasts.map((hornedBeast, index) => {
            return <HornedBeast
              hornedBeast={hornedBeast}//this is a whole beast obj = this.props
              key={index}
              openModal={this.props.handleOnShowModal}
              handleOnHide={this.props.handleOnHide}

            />
          })
        }
      </main>
    )
  }
}

export default Main;
