import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import "../../styles/naween/cardInsurence.css";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [contactDetails, setContactDetails] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8090/vehicle")
      .then((res) => {
        setVehicles(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleContactDetailsChange = (event) => {
    setContactDetails(event.target.value);
  };

  const handleContactFormSubmit = (event, ownerEmail) => {
    event.preventDefault();
    window.open(`mailto:${ownerEmail}?body=${contactDetails}`);
    setActiveCard(null);
  };

  const handleEmailButtonClick = (index) => {
    setActiveCard(index);
  };

  const renderVehicleCardContent = (vehicle) => {
    const { ownerEmail } = vehicle;

    return (
      <>
        <h3>{vehicle.vehicleName}</h3>
        <p>vehicleType: {vehicle.vehicleType}</p>
        <p>passengers: {vehicle.passengers}</p>
        <p>perDayKm: {vehicle.perDayKm}</p>
        <p>vTermsAndCond: {vehicle.vTermsAndCond}</p>
        <p>ownerName: {vehicle.ownerName}</p>
        <p>ownerEmail: {ownerEmail}</p>
      </>
    );
  };

  const renderVehicleCard = (vehicle, index) => {
    const { ownerEmail } = vehicle;
    const isCardActive = activeCard === index;

    return (
      <div className="insurence-card" key={index}>
        <div
          className={`insurence-card-content ${isCardActive ? "active" : ""}`}
          style={{
            backgroundImage: `url(data:image/png;base64,${vehicle.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          {isLoading ? (
            <Skeleton height={200} />
          ) : (
            <>
              {renderVehicleCardContent(vehicle)}
              <button
                className="request-button"
                onClick={() => handleEmailButtonClick(index)}
              >
                Email to Book
              </button>
              {isCardActive && (
                <form
                  onSubmit={(event) => handleContactFormSubmit(event, ownerEmail)}
                >
                  <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
                    Enter your contact details:
                    <textarea
                      style={{
                        height: "30px",
                        width: "100%",
                        padding: "5px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        boxSizing: "border-box",
                        marginBottom: "10px",
                      }}
                      value={contactDetails}
                      onChange={handleContactDetailsChange}
                    />
                  </label>
                  <button className="request-button" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return <div className="insurence-list">{vehicles.map(renderVehicleCard)}</div>;
}

export default VehicleList;
