
import React from "react";
 function CropCard({ crop, onBid }) {
   return (
     <div>
       <img src={`images/${crop.name}.jpg`} alt={crop.name} />
      <h2>{crop.name}</h2>
       <p>Price: ${crop.price}</p>
       <p>Contact: {crop.contact}</p>
              <p>Rating: ⭐{crop.rating}</p>
  <button onClick={() => onBid(crop)}>Place a Bid</button>
    </div>
   );
 }

export default CropCard;