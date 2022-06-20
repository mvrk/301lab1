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

  handleImgClick = () => {
    this.props.handleOnShowModal(this.props.image_url, this.props.description, this.props.horns);
  }

  render() {
    return (
      <Col className="mt-4">
        <Card style={{ width: '15rem' }} className="h-100 p-3 card-container">
          <Card.Title>
            {this.props.title}
          </Card.Title>
          <Card.Text>
            {this.state.votes} ❤️ likes
          </Card.Text>
          <p onClick={this.handleVotes}>Click here to vote for me</p>
          <Card.Img
            src={this.props.hornedBeast.image_url}
            alt={this.props.hornedBeast.description}
            title={this.props.hornedBeast.title}
            horns={this.props.hornedBeast.horns}
            onClick={() => { this.props.openModal(this.props.hornedBeast) }}
          />
           <Button className="mt-3" variant="primary" onClick={this.handleVotes}>I like it!</Button>
          <p>{this.props.hornedBeast.description}</p>

          <Card.Body>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col >
    )
  }
}

export default HornedBeast;
