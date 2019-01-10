import React, { Component} from 'react'
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  constructor() {
    super()
    this.state = {name: 'Catalin'}
  }
  render() {
    setTimeout(() => {
      this.setState({name: "Sandru"})
    }, 1000)
      return(
        <div>
          {this.state.name}
          <Header />
          <Footer />
        </div>
      )
  }
}

export default Layout