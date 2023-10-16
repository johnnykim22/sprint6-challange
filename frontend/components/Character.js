import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
 const [showHomeworld, setShowHomeworld] = useState(false);

 const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  // const togglePlanet = () => {  
  //   if (props.character.name && props.character.name[planetID]) {
  //     const planetName = props.character.name[planetID].name;
  //   }
  // };
 
 
 
 
  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{props.character.name}</h3>
      
     
    

     
      
      {showHomeworld && (
        <div className="homeworld-info">
           {/* <p onClick={togglePlanet}> */}
        Planet: <span className="character-planet">{props.planet.name}</span>
      {/* </p> */}
        </div>
      )}
    </div>
  );
}

export default Character;
