import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../viewplaces.css'


const HeritagePlaces = () => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetchPlaces();
      }, []);

    const fetchPlaces = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/places');
        setPlaces(response.data);
    } catch (error) {
        console.error('Error retrieving places:', error);
    }
    };

  return (
    <div className='container'>
        <h2>Heritage Places In Sri Lanka</h2>
        <hr/>
        <div class="row">
            <div className='card-grid'>
            {places.map((place, index) =>(
                <a href={`/places/${place._id}`} key={place._id}>
                    <div class="column">
                        <div className="card">
                            <img
                                src={`http://localhost:4000/api/images${place.imagePath1}`}
                                alt={place.filename1}
                                className="card-image"
                            />
                            <div className="card-content">
                                <h3 className="card-title">{place.title}</h3>
                                <p className="card-description">
                                {place.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
            </div>
            
        </div>
        
    </div>
  );
};

export default HeritagePlaces;


