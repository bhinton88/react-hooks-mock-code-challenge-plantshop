import React, { useState } from "react";

function PlantCard({ plantInfo, handleUpdatedPlant }) {

  const { name, image, price } = plantInfo
  const [toggle, setToggle] = useState(false)
  const [priceUpdate, setPriceUpdate] = useState(0.0)

  function handleToggle () {
    setToggle(toggle => !toggle)
  }

  function handlePriceUpdate(event) {
    event.preventDefault()
    console.log(priceUpdate)
    fetch(`http://localhost:6001/plants/${plantInfo.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "price" : parseFloat(priceUpdate)
      })
    })
    .then(response => response.json())
    .then(data => handleUpdatedPlant(data))

    event.target.reset();
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button 
        onClick={handleToggle} 
        className={toggle ? "primary" : ""}>  
        {toggle ? "In Stock" : "Out of Stock"}
      </button>
      <form onSubmit={handlePriceUpdate}>
        <input 
          type="number"
          name="price_update"
          placeholder="Update Price Here"
          step="0.01"
          onChange={(e) => setPriceUpdate(e.target.value)}
        />
        <button type="submit">Submit Updated Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
