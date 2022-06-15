import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let hBeast = [];
    data.forEach((hornedBeast, index) => {
      hBeast.push(
        <HornedBeast
          _id={hornedBeast._id}
          image_url={hornedBeast.image_url}
          title={hornedBeast.title}
          description={hornedBeast.description}
          keyword={hornedBeast.keyword}
          horns={hornedBeast.horns}
          key={index}
        />
      )
    })
    return (
      <main>
        {hBeast}
        <HornedBeast />


      </main>
    )
  }
}

export default Main;
