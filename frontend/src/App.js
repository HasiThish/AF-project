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
      </Routes>
    </Router>
  );
}

export default App;
