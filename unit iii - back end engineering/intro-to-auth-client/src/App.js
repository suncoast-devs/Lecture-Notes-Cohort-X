import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      protectedData: []
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    fetch("https://localhost:5001/api/token",
      {
        method: "POST",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }
    ).then(resp => resp.json())
    .then(data => {
      console.log(data);
      if (data.token){
        sessionStorage.setItem("token", data.token);
      }
    })
  }

  getData = () =>{
    fetch(`https://localhost:5001/api/values`,
    {
      headers:{
        "Authorization":`Bearer ${sessionStorage.getItem("token")}`
      }
    }) .then(resp => resp.json())
    .then(data => {
        this.setState({
          protectedData:data
        });
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <form onSubmit={this.handleLogin}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="whats the secret..." onChange={this.handleChange} />
            <button>login</button>
          </form>
          <button onClick={this.getData}>Get Data</button>
        </section>
      </div>
    );
  }
}

export default App;
