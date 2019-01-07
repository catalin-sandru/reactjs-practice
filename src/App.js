import React, { Component } from 'react';
import Header from './component/header';
import FriendsContainer from './component/component1';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mos Craciun</h1>
        {/* <p>bcdjsbcjs</p> */}
        <Header />
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
