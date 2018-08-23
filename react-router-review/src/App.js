import React, { Component } from 'react';
import './App.css';
import CategoryList from './Component/CategoryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Things Jason Likes</h1>
          <h3 className="">Created by Mark</h3>
        </header>
            <CategoryList />
      </div>
    );
  }
}

export default App;
