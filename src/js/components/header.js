import React, { Component} from 'react'

class Header extends Component {
  render() {
    console.log(this.props)
      return(
        <h1>{this.props.title}</h1>
      )
  }
}

export default Header
