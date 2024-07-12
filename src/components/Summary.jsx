import React from "react";
import Tile from "./Tile";
import memoryIcon from "../images/icon-memory.svg";
import reactionIcon from "../images/icon-reaction.svg";
import verbalIcon from "../images/icon-verbal.svg";
import visualIcon from "../images/icon-visual.svg";
import CustomButton from "./CustomButton";

const summaryList = [
  {
    id: 1,
    icon: reactionIcon,
    name: "Reaction",
    score: 80,
    tileColor: "hsl(0, 100%, 67%, 0.1)",
    color: "hsl(0, 100%, 67%)"
  },
  {
    id: 2,
    icon: memoryIcon,
    name: "Memory",
    score: 92,
    tileColor: "hsl(39, 100%, 56%, 0.1)",
    color: "hsl(39, 100%, 56%)"
  },
  {
    id:3,
    icon: verbalIcon,
    name: "Verbal",
    score: 61,
    tileColor: "hsl(166, 100%, 37%, 0.1)",
    color: "hsl(166, 100%, 37%)"
  },
  {
    id: 4,
    icon: visualIcon,
    name: "Visual",
    score: 72,
    tileColor: "hsl(234, 85%, 45%, 0.1)",
    color: "hsl(234, 85%, 45%)" 
  }
]


function Summary() {
    return (<div className="summary-div">
       <h3>Summary</h3>
       <div>
       {summaryList.map(x => <Tile key={x.id} icon={x.icon} name={x.name} score={x.score} color={x.color} tileColor={x.tileColor}/>)}
       </div>
             <CustomButton />
  
    </div>);
}

export default Summary;