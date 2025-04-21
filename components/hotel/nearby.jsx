import React from "react";
import dest1  from'../../assets/images/guruvayoor-temple.jpg'
import dest2 from '../../assets/images/partha.jpg'
import dest3 from '../../assets/images/beach.jpg'
const attractions = [
  { name: "Guruvayur Sri Krishna Temple", distance: "1 km", image: dest1 },
  { name: "Sree Parthasarathy Temple", distance: "2 km", image: dest2 },
  { name: "Chavakkad Beach", distance: "5 km", image: dest3 }
];

function NearbyAttractions() {
  return (
    <section id="attractions" className="attractions-section">
      <h2>Nearby Attractions</h2>
      <div className="attractions-container">
        {attractions.map((place, index) => (
          <div key={index} className="attraction-card">
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>Distance: {place.distance}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NearbyAttractions;