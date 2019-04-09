import React, { Component } from 'react';
import ClickyHeader from "./components/Header/Header";
import Wrapper from "./components/Wrapper"
import './App.css';
import GameCard from './components/Cards/Cards';
import avengers from "./avengers.json"
import Jumbotron from './components/Jumbotron';



class App extends Component {;

state ={
  avengers,
  score: 0
};

handleScore = ()=> {
  this.setState({score: this.state.score + 1})
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
          />

        ))}
      </Wrapper>
    )


  }
}

export default App;
