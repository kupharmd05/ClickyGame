import React from "react";

function GameCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name}/>
            </div>
        </div>
    )
}


export default GameCard;