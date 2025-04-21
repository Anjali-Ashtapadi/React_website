import React from "react";

function Amenities() {
  const amenitiesList = [
    "Swimming Pool",
    "Gym & Fitness Center",
    "Clubhouse",
    "24/7 Security",
    "Children's Play Area",
    "Landscaped Gardens"
  ];

  return (
    <section id="amenities" className="amenities-section">
      <h2>Our Amenities</h2>
      <ul>
        {amenitiesList.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
    </section>
  );
}

export default Amenities;
