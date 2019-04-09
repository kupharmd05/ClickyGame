import React from "react";
import "../Header/styles.css";

function ClickyHeader(props){
    return (
        
            <nav className="navbar navbar-expand-lg">Score: {props.score}</nav>
            
       
    )
}

export default ClickyHeader;