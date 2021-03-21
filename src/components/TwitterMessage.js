import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({message: e.target.value})
  }

  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.message} maxLength={this.props.maxChars} type="text" name="message" id="message" />
        <p>Characters Remaining: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
