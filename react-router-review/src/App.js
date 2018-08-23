import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Things Jason Likes</h1>
          <h3 className="">Created by Mark</h3>
        </header>
        <section className="body">
            <section>
              <header>Panda Bears</header>
              <p>Pandas are bears native to south-central China, and are objectively the cutest animals on earth.</p>
              <img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg"/>
            </section>
            <section>
              <header>Minis</header>
              <p>I enjoy painting miniatures. I've only been painting for about 6-months, here's some of my work.</p>
              <img src="https://instagram.ftpf1-1.fna.fbcdn.net/vp/ac13de8676b9e7d7b3a4f1aaf38a9a55/5C3728A2/t51.2885-15/e35/32203464_178578342778306_8009127367152762880_n.jpg"/>
            </section>
        </section>
      </div>
    );
  }
}

export default App;
