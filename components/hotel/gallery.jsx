import React from "react";
import img1 from "../../assets/images/1.png";  
import img2 from "../../assets/images/2.png";  
import img3 from "../../assets/images/3.png";  
import img4 from "../../assets/images/4.png";  




function Gallery() {
  const images = [img1, img2,img3,img4];

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;


