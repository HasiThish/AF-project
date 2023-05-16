import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/viewplaces.css'
import Daladamaligawa from '../images/download.jpeg'
import Sigiriya from '../images/10.jpeg'
import Embakke from '../images/3.jpeg'
import Gadaladeniya from '../images/7.jpeg'


const HeritagePlaces = () => {
  const [heritagePlaces, setHeritagePlaces] = useState([]);

  useEffect(() => {
    const fetchHeritagePlaces = async () => {
      const response = await axios.get('http://localhost:4000/heritagePlaces');
      setHeritagePlaces(response.data);
    };
    fetchHeritagePlaces();
  }, []);

  return (
    <div className='container'>
        <div class="row">
            <a href={'/sigiriya'}>
            <div class="column">
                <img src={Daladamaligawa} alt="Snow" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Dalada Maligawa</h1>
            </div>
            </a>
            <a href={'/sigiriya'}>
            <div class="column">
                <img src={Sigiriya} alt="Forest" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Sigiriya</h1>
            </div>
            </a>
            <div class="column">
                <img src={Gadaladeniya} alt="Mountains" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Gadaladeniya Viharaya</h1>
            </div>
            <div class="column">
                <img src={Embakke} alt="Mountains" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Embekke Dewalaya</h1>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <img src={Daladamaligawa} alt="Snow" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Dalada Maligawa</h1>
            </div>
            <div class="column">
                <img src={Daladamaligawa} alt="Forest" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Dalada Maligawa</h1>
            </div>
            <div class="column">
                <img src={Daladamaligawa} alt="Mountains" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Dalada Maligawa</h1>
            </div>
            <div class="column">
                <img src={Daladamaligawa} alt="Mountains" style={{width:'100%'}} />
                <br/>
                    <h1 className="title1">Dalada Maligawa</h1>
            </div>
        </div>
    </div>
  );
};

export default HeritagePlaces;


