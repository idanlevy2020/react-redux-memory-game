import React, { useState } from 'react';
import './Home.css';

function Home() {
   const [buttonsSelectTheme, setButtonsSelectTheme] = useState([
      { name: "Numbers", activeButton: "active" },
      { name: "Icons", activeButton: "no-active" },
   ]);

   const [buttonsNumPlayers, setButtonsNumPlayers] = useState([
      { name: 1, activeButton: "active" },
      { name: 2, activeButton: "no-active" },
      { name: 3, activeButton: "no-active" },
      { name: 4, activeButton: "no-active" },
   ]);

   const [buttonsGridSize, setButtonsGridSize] = useState([
      { name: "4x4", activeButton: "active" },
      { name: "6x6", activeButton: "no-active" },
   ]);

   function onClick(className,index){
      let newArray=null;
      switch(className) {
         case 'selectThemeBtn':
           newArray=[...buttonsSelectTheme];
           break;
         case 'numPlayersBtn':
           newArray=[...buttonsNumPlayers];
           break;
         default: //case 'gridSizeBtn':
           newArray=[...buttonsGridSize];
      }
      for(let i=0;i<newArray.length;i++){
         if (i===index) newArray[i].activeButton="active";
         else newArray[i].activeButton="no-active";
      }
      switch(className) {
         case 'selectThemeBtn':
            setButtonsSelectTheme(newArray);
           break;
         case 'numPlayersBtn':
           setButtonsNumPlayers(newArray);
           break;
         default: //case 'gridSizeBtn':
           setButtonsGridSize(newArray);
      }
   }

  return (
    <div className="Home flex-column">
       <h1>memory</h1>
       <div className="Home-content flex-column">
         <h2>Select Theme</h2>
         <div className="flex-row">
            {buttonsSelectTheme.map((button, index) => (
               <button className={`selectThemeBtn ${button.activeButton}`} key={button.index} type="button" onClick={()=>onClick("selectThemeBtn",index)}>{button.name}</button>
            ))}
         </div>
         <h2>Numbers of Players</h2>
         <div className="flex-row">
            {buttonsNumPlayers.map((button, index) => (
               <button className={`numPlayersBtn ${button.activeButton}`} key={button.index} type="button" onClick={()=>onClick("numPlayersBtn",index)}>{button.name}</button>
            ))}
         </div>
         <h2>Grid Size</h2>
         <div className="flex-row">
            {buttonsGridSize.map((button, index) => (
               <button className={`gridSizeBtn ${button.activeButton}`} key={button.index} type="button" onClick={()=>onClick("gridSizeBtn",index)}>{button.name}</button>
            ))}
         </div>
         <div>
            <button id="startGameBtn" type="button">Start Game</button>
         </div>
       </div>
    </div>
  )
}

export default Home;

// function createArrowButtons(names, setButtons){
//    let buttonsArray=[];
//    for(let i = 0; i < names.length; i++){
//       if (i===0) buttonsArray.push({ name: names[i], activeButton: "active" })
//       else buttonsArray.push({ name: names[i], activeButton: "no-active" })
//    }
//    setButtons(buttonsArray);
// }