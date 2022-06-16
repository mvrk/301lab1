import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  };
  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  handleHeadlineClick = () => {
    this.props.handleOnShowModal(this.props.image_url, this.props.description);
  }

  render() {
    return (
      <article>
        <h3 >{this.props.keyword}</h3>
        <p>❤️ {this.state.votes}</p><br />
        <p onClick={this.handleVotes}>Click here to vote for me</p>
        <img
          src={this.props.hornedBeast.image_url}
          alt={this.props.hornedBeast.description}
          title={this.props.hornedBeast.title}
          onClick={() => { this.props.openModal(this.props.hornedBeast) }}
        />
        <p>{this.props.hornedBeast.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
