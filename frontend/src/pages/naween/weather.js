import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Weather() {
  const position = [7.8731, 80.7718];
  const publicPlaces = [
    {
      name: 'Colombo',
      location: [6.9271, 79.8612],
      description: 'Capital city of Sri Lanka',
    },
    {
      name: 'Galle',
      location: [6.0320, 80.2170],
      description: 'Historical city known for its fort',
    },
    // Add more public places here
  ];
  const visitingPlaces = [
    {
      name: 'Sigiriya',
      location: [7.9500, 80.7500],
      description: 'Ancient rock fortress and palace',
    },
    {
      name: 'Ella',
      location: [6.8700, 81.0400],
      description: 'Picturesque hill station',
    },
    // Add more visiting places here
  ];

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer
        center={position}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © OpenStreetMap contributors"
        />

        {/* Markers for public places */}
        {publicPlaces.map((place, index) => (
          <Marker key={index} position={place.location}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}

        {/* Markers for visiting places */}
        {visitingPlaces.map((place, index) => (
          <Marker key={index} position={place.location}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Weather;
