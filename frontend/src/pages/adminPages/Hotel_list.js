import React, { useEffect, useState } from "react";
import AdminMenu from "./Admin_menu";
import axios from "axios";
import Edit from "../images/edit.png";
import Delete from "../images/delete.jpeg";

function HotelList() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);
//get hotels list
  const fetchHotels = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/hotels");
      setHotels(response.data);
    } catch (error) {
      console.error("Error retrieving hotels:", error);
    }
  };
//delete method
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this hotel?"
    );

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:4000/api/hotels/${id}`);
        fetchHotels(); // Refresh the hotel list
        alert("Hotel deleted successfully!");
      } catch (error) {
        console.error("Error deleting hotel:", error);
      }
    }
  };

  return (
    <div>
      <AdminMenu />
      <div className="adminContainer">
        <h1>List of Hotels</h1>
        <a href="/addhotel">
          <button className="signin-btn">Add a Hotel</button>
        </a>
        <br />

        <div>
          <table border={1}>
            <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {hotels.map((hotel, index) => (
              <tr key={hotel._id}>
                <td>{index + 1}</td>
                <td>{hotel.name}</td>
                <td>{hotel.location}</td>
                <td>
                  <a href={`/edithotel/${hotel._id}`}>
                    <button>
                      <img
                        src={Edit}
                        alt="Edit Icon"
                        style={{ height: "30px", width: "30px" }}
                      />
                    </button>
                  </a>
                  <button onClick={() => handleDelete(hotel._id)}>
                    <img
                      src={Delete}
                      alt="Delete Icon"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </button>
                </td>
              </tr>
            ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default HotelList;
