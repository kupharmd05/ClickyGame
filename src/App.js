import React, { Component } from 'react';
import ClickyHeader from "./components/Header";
import Wrapper from "./components/Wrapper/Wrapper"
import './App.css';
import GameCard from './components/Cards';
import avengers from "./avengers.json"
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from "./components/Footer/index"


class App extends Component {;

state ={
  avengers,
  score: 0,
  clicked: "false"
};

handleScore = ()=> {
  console.log("this works")
  this.setState({score: this.state.score + 1})
  console.log("this works too?")
  this.setState({clicked: "true"})
}


  render() {
    return (
      <Wrapper>
        <ClickyHeader score={this.state.score}/>
        <Jumbotron>
          <h1>Click on an Image Only Once</h1>
          </Jumbotron>
        {this.state.avengers.map(avenger => (
          <GameCard
            id={avenger.id}
            key={avenger.id}
            name={avenger.name}
            image={avenger.image}
            onClick={this.handleScore}
            clicked = {this.state.clicked}
          />

        ))}
        {/* <Footer /> */}
      </Wrapper>
        
    )


  }
}

export default App;
