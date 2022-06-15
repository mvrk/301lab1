import React from 'react';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h3>{this.props.keyword}</h3>
        <img
          src={this.props.image_url}
          alt={this.props.text}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
