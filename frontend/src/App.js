import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//common components
import HomePage from './pages/commonPages/HomePage';
import Login from './pages/commonPages/Login';
import Header from './pages/commonPages/Header';

//place components
import HeritagePlaces from './pages/userPages/view_places';
import AddHeritagePlaceForm from './pages/adminPages/Add_heritage_details';
import HeritageList from './pages/adminPages/heritages_list';
import PlaceDetails from './pages/userPages/place';
import EditPlaceForm from './pages/adminPages/Edit_Place';

//users component(admin & user)
import AdminHome from './pages/adminPages/AdminHome';
import UserHome from './pages/userPages/UserHome';
import CreateUserForm from './pages/userPages/Add_Users';
import UserList from './pages/adminPages/UserList';
import CreateAdminForm from './pages/adminPages/Add_Admin';
import EditForm from './pages/adminPages/EditUserDetails';

//naween
import VehicleList from './pages/naween/vehicleList';
import InsurenceList from './pages/naween/insurenceList';
import VehicleListAdmin from './pages/naween/admin/vehicleListAdmin';
import AddVehicle from './pages/naween/admin/vehicle';
import InsurenceListAdmin from './pages/naween/admin/insurenceListAdmin';
import AddInsurence from './pages/naween/admin/addInsurence';
import ApprovedInsurances from './pages/naween/admin/approvedInsurances';
import WeatherMap from './pages/naween/weather';

function App() {

  const [authenticated, setAuthenticated] = React.useState(false); // add state to keep track of authentication status

  return (
    <Router>
      <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Routes>

        {/*common components*/}
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/login' element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>

        {/*place components*/}
        <Route path='/' element={<HeritagePlaces/>}/>
        <Route path='/addHeritage' element={<AddHeritagePlaceForm/>}/>
        <Route path='/places/:id' element={<PlaceDetails/>}/>
        <Route path='/heritagelist' element={<HeritageList/>}/>
        <Route path='/editPlace/:id' element={<EditPlaceForm/>}/>

        {/*users component(admin & user)*/}
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/userHome' element={<UserHome/>}/>
        <Route path='/login' element={<Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>}/>
        <Route path='/addHeritage' element={<AddHeritagePlaceForm/>}/>
        <Route path='/' element={<HeritagePlaces/>}/>
       {/* <Route path='/sigiriya' element={<Sigiriya/>}/> */}
        <Route path='/heritagelist' element={<HeritageList/>}/>

        {/* naween */}
        <Route path='/vehicle-list' element={<VehicleList/>}/>
        <Route path='/insurence-list' element={<InsurenceList/>}/>
        <Route path='/vehicle-list-admin' element={<VehicleListAdmin/>}/>
        <Route path='/add-vehcile' element={<AddVehicle/>}/>
        <Route path='/insurence-list-admin' element={<InsurenceListAdmin/>}/>
        <Route path='/add-insurence' element={<AddInsurence/>}/>
        <Route path='/approved-insurence' element={<ApprovedInsurances/>}/>
        <Route path='/weather' element={<WeatherMap/>}/>

        <Route path='/signup' element={<CreateUserForm/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/addadmin' element={<CreateAdminForm/>}/>
        <Route path='/edit/:id' element={<EditForm/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
