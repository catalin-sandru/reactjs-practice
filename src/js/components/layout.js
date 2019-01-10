import React, { Component} from 'react'
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Welcome'
    }
  }
  render() {
    setTimeout(() => {
      this.setState({title: 'Welcome Catalin'})
    }, 2000)
      return(
        <div>
          <Header title={this.state.title}/>
          <Footer />
        </div>
      )
  }
}

export default Layout