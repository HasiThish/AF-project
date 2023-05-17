import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AdminHome from './pages/AdminHome';
import UserHome from './pages/UserHome';
import Login from './pages/Login';
import AddHeritagePlaceForm from './pages/Add_heritage_details';
import Header from './pages/Header';
import HeritagePlaces from './pages/view_places';
import Sigiriya from './pages/sigiriya';
import HeritageList from './pages/heritages_list';

//naween
import VehicleList from './pages/naween/vehicleList';
import InsurenceList from './pages/naween/insurenceList';
import VehicleListAdmin from './pages/naween/admin/vehicleListAdmin';
import AddVehicle from './pages/naween/admin/vehicle';
import InsurenceListAdmin from './pages/naween/admin/insurenceListAdmin';
import AddInsurence from './pages/naween/admin/addInsurence';
import ApprovedInsurances from './pages/naween/admin/approvedInsurances';

function App() {

  const [authenticated, setAuthenticated] = React.useState(false); // add state to keep track of authentication status

  return (
    <Router>
      <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/userHome' element={<UserHome/>}/>
        <Route path='/login' element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>
        <Route path='/addHeritage' element={<AddHeritagePlaceForm/>}/>
        <Route path='/' element={<HeritagePlaces/>}/>
        <Route path='/sigiriya' element={<Sigiriya/>}/>
        <Route path='/heritagelist' element={<HeritageList/>}/>

        {/* naween */}
        <Route path='/vehicle-list' element={<VehicleList/>}/>
        <Route path='/insurence-list' element={<InsurenceList/>}/>
        <Route path='/vehicle-list-admin' element={<VehicleListAdmin/>}/>
        <Route path='/add-vehcile' element={<AddVehicle/>}/>
        <Route path='/insurence-list-admin' element={<InsurenceListAdmin/>}/>
        <Route path='/add-insurence' element={<AddInsurence/>}/>
        <Route path='/approved-insurence' element={<ApprovedInsurances/>}/>


      </Routes>
    </Router>
  );
}

export default App;
