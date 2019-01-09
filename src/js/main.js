import React, { Component} from 'react'
class Layout extends Component {
  constructor() {
    super()
    this.name = 'Catalin'
  }
  render() {
      return(
        <h1>It's {this.name}!</h1>
      )
  }
}

export default Layout