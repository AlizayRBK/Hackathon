
import React, { useState } from "react";

 function FarmerDashboard() {
  const [crops, setCrops] = useState([
    { id: 1, name: "Wheat", price: "100", contact: "0300-1234567", rating: 4 },
   { id: 2, name: "Rice", price: "150", contact: "0300-7654321", rating: 5 },
  ]);

   return (
 <div>
  <h1>Farmer Dashboard</h1>
  <h2>Your Crops</h2>
     {crops.map((crop) => (
     <div key={crop.id}>
       <h3>{crop.name}</h3>
        <p>Price: {crop.price}</p>
       <p>Contact: {crop.contact}</p>
     <p>Rating: ⭐{crop.rating}</p>
        <button>Edit</button>
         <button>Delete</button>
     </div>
   ))}
  </div>
  );
 }

 export default FarmerDashboard;