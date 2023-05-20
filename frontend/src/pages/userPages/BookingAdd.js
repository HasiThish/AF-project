import React, { useState } from "react";
import "../admin.css";

function BookingAdd() {
  const [username, setusername] = useState("");
  const [mobile, setmobile] = useState("");
  const [hotel_name, sethotel_name] = useState("");
  const [date, setdate] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") setusername(value);
    else if (name === "mobile") setmobile(value);
    else if (name === "hotel_name") sethotel_name(value);
    else if (name === "date") setdate(value);
 
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Check for empty fields
    if (
      username.trim() === "" ||
      mobile.trim() === "" ||
      hotel_name.trim() === "" ||
      date.trim() === "" 
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Mobile number validation
    const mobileNumberPattern = /^\d{10}$/;
    if (!mobileNumberPattern.test(mobile)) {
      alert("Invalid mobile number. Please enter a 10-digit mobile number.");
      return;
    }

    const data = {
      username: username,
      mobile: mobile,
      hotel_name: hotel_name,
      date: date,
    };
    //add api call
    fetch("http://localhost:4000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hotel Booking added response:", data);
        alert("Hotel Booking added successfully!");

        // Reset form values
        setusername("");
        setmobile("");
        sethotel_name("");
        setdate("");

        // Navigate to hotelsgrid
        window.location.href = "/bookingslist";
      })
      .catch((error) => {
        console.error("Error adding Hotel Booking:", error);
        alert("Hotel Booking added failed!");
      });
  };

  return (
    <div>
      <div className="bookindcontainer">
        <h1>Add Hotel Booking Details</h1>
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                  placeholder="Enter User Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={mobile}
                  onChange={handleInputChange}
                  placeholder="Enter User Mobile Number"
                  className="input-custom"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="hotel_name">Hotel Name:</label>
              <input
                type="text"
                id="hotel_name"
                name="hotel_name"
                value={hotel_name}
                onChange={handleInputChange}
                placeholder="Enter Hotel Name"
                className="form-input input-custom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleInputChange}
                placeholder="Enter date"
                className="form-input input-custom"
                required
              />
            </div>
            <br />
            <br />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingAdd;
