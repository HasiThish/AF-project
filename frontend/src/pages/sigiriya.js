import React from 'react';
import '../styles/sigiriya.css';
import Sigiriya1 from '../images/10.jpeg';
import Sigiriya2 from '../images/13.jpeg';
import Sigiriya3 from '../images/12.jpeg';

function Sigiriya() {
  return (
    <div className="container1">
      <h1>Sigiriya</h1>
      <div className="image-container">
        <img src={Sigiriya1} alt="Mountains" className="image" />
        <p className="caption">
          Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil:
          சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock
          fortress located in the northern Matale District near the town of
          Dambulla in the Central Province, Sri Lanka. It is a site of
          historical and archaeological significance that is dominated by a
          massive column of granite rock approximately 180 m (590 ft) high.
        </p>
      </div>
      <div className="image-container">
        <img src={Sigiriya2} alt="Mountains" className="image" />
        <p className="caption">
          According to the ancient Sri Lankan chronicle the Cūḷavaṃsa, this
          area was a large forest, then after storms and landslides it became
          a hill and was selected by King Kashyapa (AD 477–495) for his new
          capital. He built his palace on top of this rock and decorated its
          sides with colourful frescoes. On a small plateau about halfway up
          the side of this rock he built a gateway in the form of an enormous
          lion. The name of this place is derived from this structure;
          Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the
          Sanskrit name of Singapore, the Lion City)
        </p>
      </div>
      <div className="image-container">
        <img src={Sigiriya3} alt="Mountains" className="image" />
        <p className="caption">
          The capital and the royal palace were abandoned after the king's
          death. It was used as a Buddhist monastery until the 14th century.
          Sigiriya today is a UNESCO listed World Heritage Site. It is one of
          the best preserved examples of ancient urban planning.
        </p>
      </div>
    </div>
  );
}

export default Sigiriya;
