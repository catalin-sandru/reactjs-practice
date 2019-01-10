import React, { Component} from 'react'
import Header from './header'
import Footer from './footer'

class Layout extends Component {
  render() {
    const title = 'Welcome Catalin';
      return(
        <div>
          <Header title={title}/>
          <Footer />
        </div>
      )
  }
}

export default Layout