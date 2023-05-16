import React from 'react';

function UserHome({ handleLogout }) {
  return (
    <div>
      <h1>Welcome Traveller</h1>
      <button onClick={handleLogout}>Logout</button>
      <p>This is the normal view of the website for travellers.</p>
    </div>
  );
}

export default UserHome;
