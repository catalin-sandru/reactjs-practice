import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props) 
    this.state = [
      'Home',
      'About',
      'Info',
      'Contact'
    ]
  }
  render() {
    return(
      <ul class="navbar">
        <li>{this.state[0]}</li>  
        <li>{this.state[1]}</li>  
        <li>{this.state[2]}</li>  
        <li>{this.state[3]}</li>  
      </ul>
    )
  }
}
export default Navbar;