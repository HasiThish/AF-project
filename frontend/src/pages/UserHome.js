// import React from 'react';

// function UserHome({ handleLogout }) {
//   return (
//     <div>
//       <h1>Welcome Traveller</h1>
//       <button onClick={handleLogout}>Logout</button>
//       <p>This is the normal view of the website for travellers.</p>
//     </div>
//   );
// }

// export default UserHome;

import React from "react";

import '../styles/naween/dashboard.css'

function UserHome(){

  function handleClickInsurence(){
         window.location.href = "/insurence-list";
          }
          
  function handleClickVehicle(){
         window.location.href = "/vehicle-list";
         }
         
  function handleClicktest(){
            window.location.href = "/";
            }       
    
 
     return(
         <>
        <div className="dashboard-container">
        <div className="dashboard-row">
           <button className="dashboard-button" onClick={handleClickInsurence}>Insurence </button>
 
           <button className="dashboard-button" onClick={handleClickVehicle}>Vehicle </button>
           <button className="dashboard-button" onClick={handleClickInsurence}>Heritage </button>
 
          <button className="dashboard-button" onClick={handleClickVehicle}>#### </button>
          
 
           
          
 </div>
        </div>
         
         </>
     )
 }
 
 export default UserHome;