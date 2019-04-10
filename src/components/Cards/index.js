import React from "react";
import "../Cards/styles.css";




export class GameCard extends React.Component {

    handleClick = () => {
        // console.log("this works too?")
        this.setState({ clicked: true })
        
      };
     
      
    render() {
        return (
            
            <div className="card">
                <div className="img-container">
                    <img src={this.props.avenger.image} alt={this.props.avenger.name} clicked={this.props.avenger.clicked} onClick={this.handleClick}/>

                </div>
            </div>
        )
    }
}


export default GameCard;