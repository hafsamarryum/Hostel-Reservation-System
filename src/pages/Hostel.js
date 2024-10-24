import React from 'react';
import '../style/Hostel.css'; // Ensure you have a CSS file for styling
import h1 from '../images/h1.jpg'
import h2 from '../images/h2.jpg'
import h3 from '../images/h3.jpg'
import h4 from '../images/h4.jpg'
import h5 from '../images/h5.jpg'
import h6 from '../images/h6.jpg'
import h7 from '../images/h7.jpg'
import h8 from '../images/h8.jpg'
import h9 from '../images/h9.jpg'
import h10 from '../images/h10.jpg'
import h11 from '../images/h11.jpg'
import h12 from '../images/h12.jpg'
const hostels = [
  { id: 1, name: 'Hostel One', description: 'A cozy place to stay at the heart of the city.', imageUrl: h1 },
  { id: 2, name: 'Hostel Two', description: 'Enjoy the serene beauty of the countryside.', imageUrl: h2 },
  { id: 1, name: 'Hostel One', description: 'A cozy place to stay at the heart of the city.', imageUrl:h3 },
  { id: 2, name: 'Hostel Two', description: 'Enjoy the serene beauty of the countryside.', imageUrl: h4 },
  { id: 1, name: 'Hostel One', description: 'A cozy place to stay at the heart of the city.', imageUrl: h5 },
  { id: 2, name: 'Hostel Two', description: 'Enjoy the serene beauty of the countryside.', imageUrl: h6 },
  { id: 1, name: 'Hostel One', description: 'A cozy place to stay at the heart of the city.', imageUrl: h7},
  { id: 2, name: 'Hostel Two', description: 'Enjoy the serene beauty of the countryside.', imageUrl: h8 },
  { id: 1, name: 'Hostel One', description: 'A cozy place to stay at the heart of the city.', imageUrl: h9 },
  { id: 2, name: 'Hostel Two', description: 'Enjoy the serene beauty of the countryside.', imageUrl: h10 },
  { id: 1, name: 'Hostel One', description: 'A cozy place to stay at the heart of the city.', imageUrl: h11 },
  { id: 2, name: 'Hostel Two', description: 'Enjoy the serene beauty of the countryside.', imageUrl: h12 },
];

const Hostel = () => {
  return (
    <div className="hostel-container">
    
      {hostels.map(hostel => (
        <div key={hostel.id} className="hostel-box">
          <img src={hostel.imageUrl} alt={hostel.name} />
          <h3>{hostel.name}</h3>
          <p>{hostel.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hostel;
