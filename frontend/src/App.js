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
import RestaurantSearchPage from './pages/commonPages/RestaurantSearchPage';
import RestaurantList from './pages/adminPages/restaurants_list';

//users component(admin & user)
import AdminHome from './pages/adminPages/AdminHome';
import UserHome from './pages/userPages/UserHome';
import CreateUserForm from './pages/userPages/Add_Users';
import UserList from './pages/adminPages/UserList';
import CreateAdminForm from './pages/adminPages/Add_Admin';
import EditForm from './pages/adminPages/EditUserDetails';

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
        <Route path='/restaurantsearchpage' element={<RestaurantSearchPage/>}/>
        <Route path='/restaurantlist' element={<RestaurantList/>}/>

        {/*users component(admin & user)*/}
        <Route path='/adminHome' element={<AdminHome/>}/>
        <Route path='/userHome' element={<UserHome/>}/>
        <Route path='/signup' element={<CreateUserForm/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/addadmin' element={<CreateAdminForm/>}/>
        <Route path='/edit/:id' element={<EditForm/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
