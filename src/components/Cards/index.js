import React from "react";
import "../Cards/styles.css";


function GameCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} onClick={props.onClick}/>
                
            </div>
        </div>
    )
}


export default GameCard;