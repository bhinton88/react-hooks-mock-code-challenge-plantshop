import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, handleUpdatedPlant }) {
  return (
    <ul className="cards">
      {plantData.map(value => 
        <PlantCard 
          handleUpdatedPlant={handleUpdatedPlant}
          plantInfo={value} 
          key={value.id} 
        /> 
        )}
    </ul>
  );
}

export default PlantList;
