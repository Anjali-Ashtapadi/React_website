import React from "react";

import room2 from "../../assets/images/room2.png";
import room3 from "../../assets/images/room3.png";
import room4 from "../../assets/images/room4.png";
import room5 from "../../assets/images/room5.png";

const rooms = [
  
  { name: "Junior Suite AC", price: "₹2500/night", image: room2 },
  { name: "Premium AC", price: "₹3500/night", image: room3 },
  { name: "Suite Room AC", price: "₹4500/night", image: room4 },
  { name: "Family Room Non-AC", price: "₹2000/night", image: room5 }
];

function Rooms() {
  return (
    <section id="rooms" className="rooms-section">
      <h2>Our Rooms</h2>
      <div className="rooms-container">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;

