import React from 'react';
import Image from 'react-bootstrap/Image'
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      votes:0
    }
  }
  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };
  render() {
    return (
      <article>
        <h3>{this.props.keyword}</h3>
        <p>❤️ {this.state.votes}</p><br/>
        <p onClick={this.handleVotes}>Click here to vote for me</p>
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
