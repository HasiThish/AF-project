import React, { useEffect, useState } from 'react'
import AdminMenu from './Admin_menu'
import '../admin.css'
import '../heritagelist.css'
import Edit from '../images/edit.png'
import Delete from '../images/delete.jpeg'
import axios from 'axios';

function HeritageList() {

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
  
  
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this place?');
  
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:4000/api/places/${id}`);
          fetchPlaces(); // Refresh the place list
          alert('Place deleted successfully!');
        } catch (error) {
          console.error('Error deleting place:', error);
        }
      }
    };
  

  return (
    <div>
      <AdminMenu />
      <div className='adminContainer'>
        <h1>List of Heritage Places</h1>
        <a href={'/addHeritage'}><button className="signin-btn">Add A Place</button></a><br/>
        
        <div>
            <table border={1}>
            
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                {places.map((place, index) =>(
                    <tr key={place._id} >
                        <td onClick={() => setSelectedPlace(place)}>{index + 1}</td>
                        <td>{place.title}</td>
                        <td>{place.location}</td>
                        <td>
                        <a href={`/editPlace/${place._id}`}><button ><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}} />   </button></a>
                            <button onClick={() => handleDelete(place._id)}><img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></button>
                        </td>
                    </tr>
                ))}
                
            </table>
        </div>
        
      </div>
    </div>
  );
}

export default HeritageList;
