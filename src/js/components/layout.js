import React, { Component} from 'react'
import Header from './header'

class Layout extends Component {
  render() {
    var list = [
      <Header />,
      <Header />,
      <Header />
    ]
      return(
        <div>
          {list}
          <Header />
        </div>
      )
  }
}

export default Layout