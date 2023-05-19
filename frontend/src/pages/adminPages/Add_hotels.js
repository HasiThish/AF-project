import React, { useState } from "react";
import "../add_heritage.css";
import AdminMenu from "./Admin_menu";
import "../admin.css";

function HotelForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState("");
  const [price_start, setPrice_start] = useState("");
  const [price_end, setPrice_end] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") setName(value);
    else if (name === "location") setLocation(value);
    else if (name === "description") setDescription(value);
    else if (name === "phone") setPhone(value);
    else if (name === "rating") setRating(value);
    else if (name === "price_start") setPrice_start(value);
    else if (name === "price_end") setPrice_end(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      location: location,
      description: description,
      phone: phone,
      rating: rating,
      price_start: price_start,
      price_end: price_end,
    };
//add api call
    fetch("http://localhost:4000/api/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hotel added response:", data);
        alert("Hotel added successfully!");

        // Reset form values
        setName("");
        setLocation("");
        setDescription("");
        setPhone("");
        setRating("");
        setPrice_start("");
        setPrice_end("");
      })
      .catch((error) => {
        console.error("Error adding Hotel:", error);
        alert("Hotel added failed!");
      });
  };

  return (
    <div>
      <AdminMenu />

      <div className="adminContainer">
        <h1>Add Hotel Details</h1>
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  placeholder="Enter Hotel Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleInputChange}
                  placeholder="Enter Location"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleInputChange}
                placeholder="Enter Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                placeholder="   Enter Contact Number"
                className="form-input input-custom"
                />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rating">Rating:</label>
                <select
                  id="rating"
                  name="rating"
                  value={rating}
                  onChange={handleInputChange}
                >
                  <option value="">Select Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price_start">Starting Price for a Room:</label>
                <input
                  type="number"
                  id="price_start"
                  name="price_start"
                  value={price_start}
                  onChange={handleInputChange}
                  placeholder="   Enter Starting Price"
                  className="form-input input-custom"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price_end">Ending Price for a Room:</label>
                <input
                  type="number"
                  id="price_end"
                  name="price_end"
                  value={price_end}
                  onChange={handleInputChange}
                  placeholder="   Enter Ending Price"
                  className="form-input input-custom"
                />
              </div>
            </div>
            <br /><br />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HotelForm;
