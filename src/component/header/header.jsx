import React, { Component} from 'react'
class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      title: 'Welcome'
    }
  }
  render() {
    return(
      <h1>
        {this.state.title}
      </h1>
    )
  }
}

export default Navbar;