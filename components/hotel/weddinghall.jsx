import React from "react";
import hall1 from "../../assets/images/platinum.png";
import hall2 from "../../assets/images/ruby.png";
import hall3 from "../../assets/images/diamond.png";
const halls = [
  { name: "Platinum Hall", capacity: "500 Guests", image: hall1 },
  { name: "Diamond Hall", capacity: "300 Guests", image: hall2 },
  { name: "Ruby Hall", capacity: "150 Guests", image: hall3}
];

function WeddingHall() {
  return (
    <section id="wedding-hall" className="wedding-hall-section">
      <h2>Wedding & Banquet Halls</h2>
      <div className="halls-container">
        {halls.map((hall, index) => (
          <div key={index} className="hall-card">
            <img src={hall.image} alt={hall.name} />
            <h3>{hall.name}</h3>
            <p>Capacity: {hall.capacity}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeddingHall;
