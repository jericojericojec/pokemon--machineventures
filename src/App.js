import React, { Component } from 'react';
import './styles/App.css';
import LeftPanel from './layout/LeftPanel';
import RightPanel from './layout/RightPanel';

class App extends Component {
  render() {
    return (
      <div className="container mb3">
        <div className="row">
          <div className="twelve columns">
            <h1 className="tc f1 lh-title">Welcome to Pokemon Data Information Center</h1>
          </div>
        </div>
        <div className="row">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
