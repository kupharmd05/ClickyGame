import React, { Component } from 'react';
import ClickyHeader from "./components/Header";
import Wrapper from "./components/Wrapper/Wrapper"
import './App.css';
// import avengers from "./avengers.json";
import Jumbotron from './components/Jumbotron/Jumbotron';

import CardHolder from './components/Cardholder';


class App extends Component {

  state = {
    avengers: [
      {
          id: 1,
          name: "Ironman",
          image : "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190408195514",
          clicked: false
          
      },
      {
          id: 2,
          name: "Thor",
          image: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest?cb=20190408195559",
          clicked: false
      
      },
      {
          id: 3,
          name: "Captain America",
          image: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest?cb=20190408195450",
          clicked: false
      },
      {
          id: 4,
          name: "Hulk",
          image: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/e8/BruceBanner-EndgameProfile.jpg/revision/latest?cb=20190408195441",
          clicked: false
      },
      // {
      //     "id": 5,
      //     "name": "Thanos",
      //     "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest?cb=20190408195450"
      // },
      // {
      //     "id": 6,
      //     "name": "CaptainMarvel",
      //     "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fe/CapMarvel-EndgameProfile.jpeg/revision/latest?cb=20190408195457"
      // },
      // {
      //     "id": 7,
      //     "name": "Hawkeye",
      //     "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/08/HawkeyeRonin-EndgameProfile.jpg/revision/latest?cb=20190408195506"
      // },
      // {
      //     "id": 8,
      //     "name": "BlackWidow",
      //     "image": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/BlackWidow-EndgameProfile.jpg/revision/latest?cb=20190408195428"
  
      // }
  ],
    score: 0,
    
  };

  // handleScore = () => {
  //   console.log("this works")
  //   this.setState({ score: this.state.score + 1 })
    
  // };

  onAvengerSelect = ()=> {
    console.log("I'm in app.js")
  }


  render() {
    console.log(this.state.avengers)
    return (
      <Wrapper>
        <ClickyHeader score={this.state.score} />
        <Jumbotron>
          <h1>Click on an Image Only Once</h1>
        </Jumbotron>
        <CardHolder avengers={this.state.avengers} blah={this.onAvengerSelect}/>
      </Wrapper>
    );
  }
}


export default App;
