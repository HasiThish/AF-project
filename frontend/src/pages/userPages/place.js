import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../sigiriya.css'
import { useParams } from 'react-router-dom';


const PlaceDetails = () => {
  const [heritagePlaces, setHeritagePlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchHeritagePlaces = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/places/place/${id}`);
        setHeritagePlaces(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error retrieving heritage places:', error);
      }
    };
    fetchHeritagePlaces();
  }, [id]);

  useEffect(()=>{
    const fetchPlaces = async () => {
      try {
        const response1 = await axios.get(`http://localhost:4000/api/places/places/${heritagePlaces.location}`);
        setFilteredPlaces(response1.data);
      } catch (error) {
        console.error('Error retrieving places:', error);
      }
    };
    fetchPlaces();
  }, [heritagePlaces.location])
  

  return (
    <div>
      <div class="row">
        <div class="col1-75">
          <div class="container">
            <h1>{heritagePlaces.title}</h1>
            <hr />
            <div className="image-container">
              <img
                src={`http://localhost:4000/api/images${heritagePlaces.imagePath2}`}
                alt={heritagePlaces.filename2}
                className="image"
              />
              <p className="caption">{heritagePlaces.description1}</p>
            </div>
            <div className="image-container">
              <img
                src={`http://localhost:4000/api/images${heritagePlaces.imagePath3}`}
                alt={heritagePlaces.filename3}
                className="image"
              />
              <p className="caption">{heritagePlaces.description2}</p>
            </div>
            <div className="image-container">
              <img
                src={`http://localhost:4000/api/images${heritagePlaces.imagePath4}`}
                alt={heritagePlaces.filename4}
                className="image"
              />
              <p className="caption">{heritagePlaces.description3}</p>
            </div>
          </div>
        </div>
        <div class="col1-25">
          <div class="container">
            <h2>Places Near By</h2>
            <hr />
            {filteredPlaces
              .filter((place) => place._id !== heritagePlaces._id)
              .map((place) => (
                <a href={`/places/${place._id}`} key={place._id}>
                  <div class="row">
                    <div className="card">
                      <img
                        src={`http://localhost:4000/api/images${place.imagePath1}`}
                        alt={place.filename1}
                        className="card-image"
                      />
                      <div className="card-content">
                        <h3 className="card-title">{place.title}</h3>
                        <p className="card-description">{place.location}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}  

export default PlaceDetails;


