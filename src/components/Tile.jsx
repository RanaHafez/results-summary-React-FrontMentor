import React from "react";

function Tile (props){
    return <div className="tile" style={{backgroundColor: props.tileColor}}>
    <div className="category-div">
    <img src={props.icon} alt=""/>
    <p style={{color:props.color}}>{props.name}</p>
    </div>
    <div className="category-score-div">
    <p><span className="category-score">{props.score}</span> / 100</p>
    </div>
    </div>;
}

export default Tile;