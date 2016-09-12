import React, { Component } from 'react';
import PinPageContainer from './container/PinPageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <PinPageContainer store={this.props.store} />
      </div>
    );
  }
}

export default App;
