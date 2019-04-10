import React, { Component } from 'react'
import Cards from "../Cards"

export class CardHolder extends Component {

  
    
  render() {
    
    return this.props.avengers.map((avenger) => (
        <Cards avenger={avenger} key={avenger.id} style={{ itemStyle }} onClick={this.props.blah}/>
    ))
  }
}

const itemStyle = {
    backgroundColor: '#f4f4f4',
    display: 'flex'
}

export default CardHolder
