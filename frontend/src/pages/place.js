import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/viewplaces.css'
import Daladamaligawa from '../images/download.jpeg'
import Sigiriya from '../images/10.jpeg'
import Sigiriya1 from '../images/13.jpeg'
import Sigiriya2 from '../images/12.jpeg'


const PlaceDetails = () => {
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
        <h1>Sigiriya</h1>
        <img src={Sigiriya} alt="Mountains" style={{width:'100%'}} />
        <p>Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite rock approximately 180 m (590 ft) high.</p>
        <img src={Sigiriya1} alt="Mountains" style={{width:'100%'}} />
        <p>According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this area was a large forest, then after storms and landslides it became a hill and was selected by King Kashyapa (AD 477–495) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. On a small plateau about halfway up the side of this rock he built a gateway in the form of an enormous lion. The name of this place is derived from this structure; Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the Sanskrit name of Singapore, the Lion City)</p>
        <img src={Sigiriya2} alt="Mountains" style={{width:'100%'}} />
        <p>The capital and the royal palace were abandoned after the king's death. It was used as a Buddhist monastery until the 14th century.[3] Sigiriya today is a UNESCO listed World Heritage Site. It is one of the best preserved examples of ancient urban planning.</p>
    </div>
  );
};

export default PlaceDetails;


