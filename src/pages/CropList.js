
 import React, { useState } from "react";
 import CropCard from "./CropCard";
 import BiddingForm from "./BiddingForm";

function CropList() {
 const [crops] = useState([
     { id: 1, name: "Wheat", price: "100", contact: "0300-1234567", rating: 4 },
     { id: 2, name: "Rice", price: "150", contact: "0300-7654321", rating: 5 },
   ]);
   const [selectedCrop, setSelectedCrop] = useState(null);

   const handleBid = (crop) => {
     setSelectedCrop(crop);
   };

   return (
     <div>
       <h2>Available Crops</h2>
       {crops.map((crop) => (
         <CropCard key={crop.id} crop={crop} onBid={handleBid} />
       ))}
       {selectedCrop && <BiddingForm crop={selectedCrop} />}
     </div>
   );
 }

 export default CropList;