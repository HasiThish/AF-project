import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminMenu from './Admin_menu'

const EditPlaceForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');
  const [description3, setDescription3] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [prevImage1, setPrevImage1] = useState('');
  const [prevImage2, setPrevImage2] = useState('');
  const [prevImage3, setPrevImage3] = useState('');
  const [prevImage4, setPrevImage4] = useState('');

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/places/place/${id}`);
        const placeData = response.data;

        setTitle(placeData.title);
        setLocation(placeData.location);
        setDescription1(placeData.description1);
        setDescription2(placeData.description2);
        setDescription3(placeData.description3);
        setPrevImage1(placeData.imagePath1);
        setPrevImage2(placeData.imagePath2);
        setPrevImage3(placeData.imagePath3);
        setPrevImage4(placeData.imagePath4);

      } catch (error) {
        console.error('Error fetching place:', error);
        // Handle error
      }
    };

    fetchPlace();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('location', location);
      formData.append('description1', description1);
      formData.append('description2', description2);
      formData.append('description3', description3);
      formData.append('image1', image1);
      formData.append('image2', image2);
      formData.append('image3', image3);
      formData.append('image4', image4);

      await axios.put(`http://localhost:4000/api/places/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Place details updated successfully!');
      // Handle success or navigate back to user list
      navigate('/heritagelist');
      
    } catch (error) {
      console.error('Error updating place:', error);
      // Handle error
    }
  };

  return (
    <div>
      <AdminMenu/>
      <div className='adminContainer'>
        <h1>Edit Place Details</h1>
        <div class='container'>
      <form onSubmit={handleSubmit}>
      <div class='row'>
      <div className='col-25'>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <label htmlFor="description1">Description 1:</label>
      <textarea
        id="description1"
        value={description1}
        onChange={(e) => setDescription1(e.target.value)}
      ></textarea>

      <label htmlFor="description2">Description 2:</label>
      <textarea
        id="description2"
        value={description2}
        onChange={(e) => setDescription2(e.target.value)}
      ></textarea>

      <label htmlFor="description3">Description 3:</label>
      <textarea
        id="description3"
        value={description3}
        onChange={(e) => setDescription3(e.target.value)}
      ></textarea>
      </div>

      <div className='col-75'>
      <label htmlFor="image1">Image 1:</label>
      {prevImage1 && (
        <img src={`http://localhost:4000/api/places${prevImage1}`} alt="Previous Image" style={{ width: '200px' }} />
      )}
      <input
        type="file"
        id="image1"
        onChange={(e) => setImage1(e.target.files[0])}
      /><br/>

      <label htmlFor="image2">Image 2:</label>
      {prevImage2 && (
        <img src={`http://localhost:4000/api/places${prevImage2}`} alt="Previous Image" style={{ width: '200px' }} />
      )}
      <input
        type="file"
        id="image2"
        onChange={(e) => setImage2(e.target.files[0])}
      /><br/>

      <label htmlFor="image3">Image 3:</label>
      {prevImage3 && (
        <img src={`http://localhost:4000/api/places${prevImage3}`} alt="Previous Image" style={{ width: '200px' }} />
      )}
      <input
        type="file"
        id="image3"
        onChange={(e) => setImage3(e.target.files[0])}
      /><br/>

      <label htmlFor="image4">Image 4:</label>
      {prevImage4 && (
        <img src={`http://localhost:4000/api/places${prevImage4}`} alt="Previous Image" style={{ width: '200px' }} />
      )}
      <input
        type="file"
        id="image4"
        onChange={(e) => setImage4(e.target.files[0])}
      />
      </div><br/>

      </div>
<br/><br/>
      <button type="submit" className='submit'>Update Place</button>
    </form>
    </div>
      </div>
    </div>
  );
};

export default EditPlaceForm;
