import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantData, setPlantData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlantData(data))
  },[]) 

  function handleNewPlant(formData){
    setPlantData([...plantData, formData])
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function handleUpdatedPlant(updatedPlant){
    const updatedPlants= plantData.map(value => {
      if(value.id === updatedPlant.id) {
        return updatedPlant
      } else {
        return value
      }
    })
    setPlantData(updatedPlants)
  }

  const searchedPlantData = plantData.filter(value => value.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search handleSearch={handleSearch} />
      <PlantList 
        plantData={searchedPlantData} 
        handleUpdatedPlant={handleUpdatedPlant}
      />
    </main>
  );
}

export default PlantPage;
