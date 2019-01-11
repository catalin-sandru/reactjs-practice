import React, { Component } from 'react';
import MessageList from './components/index'

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: Dummy_Data
    }
  }
  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
