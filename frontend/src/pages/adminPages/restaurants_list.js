import React, { useEffect, useState } from 'react'
import AdminMenu from './Admin_menu'
import '../admin.css'
import '../restaurantlist.css'
import Edit from '../images/edit.png'
import Delete from '../images/delete.jpeg'
import axios from 'axios';

function RestaurantList() {

    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [restaurants, setRestaurants] = useState([]);
  
    useEffect(() => {
      fetchRestaurants();
    }, []);
  
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/restaurants/');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error loading restaurants:', error);
      }
    };
  
  
    const handleDelete = async (id) => {
      const confirmDelete = window.confirm('Are you sure you want to delete this restaurant?');
  
      if (confirmDelete) {
        try {
          await axios.delete(`http://localhost:4000/api/restaurants/${id}`);
          fetchRestaurants(); // Refresh the restaurant list
          alert('Restaurant deleted successfully!');
        } catch (error) {
          console.error('Error deleting restaurant:', error);
        }
      }
    };
  

  return (
    <div>
      <AdminMenu />
      <div className='adminContainer'>
        <h1>List of Restaurants</h1>
        <a href={'/addRestaurant'}><button className="signin-btn">Add A Restaurant</button></a><br/>
        
        <div>
            <table border={1}>
            
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
                {restaurants.map((restaurant, index) =>(
                    <tr key={restaurant._id} >
                        <td onClick={() => setSelectedRestaurant(restaurant)}>{index + 1}</td>
                        <td>{restaurant.res_name}</td>
                        <td>{restaurant.res_city}</td>
                        <td>
                        <a href={`/editRestaurant/${restaurant._id}`}><button ><img src={Edit} alt="Website Logo" style={{height:'30px', width:'30px'}} />   </button></a>
                            <button onClick={() => handleDelete(restaurant._id)}><img src={Delete} alt="Website Logo" style={{height:'30px', width:'30px'}}/></button>
                        </td>
                    </tr>
                ))}
                
            </table>
        </div>
        
      </div>
    </div>
  );
}

export default RestaurantList;
