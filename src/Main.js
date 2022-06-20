import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';

class Main extends React.Component {

  render() {
    return (
      <main>
        {
          this.props.data.map((hornedBeast, index) => {
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
