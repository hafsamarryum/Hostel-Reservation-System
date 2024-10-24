import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import '../style/Home.css' // Assume you have a CSS file for styles
import slid1 from '../images/slid1.jpg'
import slid2 from '../images/slid2.jpg'
import slid3 from '../images/slid3.jpg'
const Home = () => {
  const images = [h3, h4,slid1,slid2,slid3];
  
  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="image-container">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="d-block w-auto"
                style={{ height: '400px', width: '400px' }} // Adjusted for aspect ratio
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
