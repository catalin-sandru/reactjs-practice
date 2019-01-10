import React, { Component} from 'react'

class Header extends Component {
  handleChange(e) {
    const title = e.target.value
    this.props.changeTitle(title)
  }
  render() {
      return(
        <div>
          <h1>{this.props.title}</h1>
          <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
        </div>
      )
  }
}

export default Header
