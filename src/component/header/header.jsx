import React, { Component } from 'react';
class header__wrapper extends Component {
  constructor(props) {
    super(props) 

    this.state= {
      username: 'santa claus',
      nickname: 'fat guy in red'
    }

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e, f) {
    this.setState({
      username: e.target.value
    });
    this.setState({
      nickname: e.target.value
      
    })
  };

  render() {
    return(
      <div>
        Hello {this.state.username} <br />
        Change Name:
        <input 
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
          />
        <br />
        <br />
        Nickname {this.state.nickname} <br />
        Change Nickname:
        <input 
          type="text"
          value={this.state.nickname}
          onChange={this.handleChange} />
      </div>
    )
  }
};
export default header__wrapper