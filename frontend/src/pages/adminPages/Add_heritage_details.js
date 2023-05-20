import React, { useState } from 'react';
import '../add_heritage.css';
import AdminMenu from './Admin_menu'
import '../admin.css'

function HeritagePlaceForm() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');
  const [description3, setDescription3] = useState('');
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [displayedImage1, setDisplayedImage1] = useState(null);
  const [displayedImage2, setDisplayedImage2] = useState(null);
  const [displayedImage3, setDisplayedImage3] = useState(null);
  const [displayedImage4, setDisplayedImage4] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [image1Error, setImage1Error] = useState('');

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'title') setTitle(value);
    else if (name === 'location') setLocation(value);
    else if (name === 'description1') setDescription1(value);
    else if (name === 'description2') setDescription2(value);
    else if (name === 'description3') setDescription3(value);
  };

  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    setImage1(file);
    setDisplayedImage1(URL.createObjectURL(file));
  };

  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    setImage2(file);
    setDisplayedImage2(URL.createObjectURL(file));
  };

  const handleImage3Change = (event) => {
    const file = event.target.files[0];
    setImage3(file);
    setDisplayedImage3(URL.createObjectURL(file));
  };

  const handleImage4Change = (event) => {
    const file = event.target.files[0];
    setImage4(file);
    setDisplayedImage4(URL.createObjectURL(file));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Reset previous error messages
    setTitleError('');
    setLocationError('');
    setImage1Error('');

    // Validation checks
    if (title.trim() === '') {
      setTitleError('Please enter a title.');
      return;
    }
    if (location.trim() === '') {
      setLocationError('Please enter a location.');
      return;
    }
    if (image1 === null) {
      setImage1Error('Please select an image for Image 1.');
      return;
    }

    
      const formData = new FormData();
      formData.append('title', title);
      formData.append('location', location);
      formData.append('description1', description1);
      formData.append('description2', description2);
      formData.append('description3', description3);
      formData.append('image1', image1);
      formData.append('image2', image2);
      formData.append('image3', image3);
      formData.append('image4', image4);

      fetch('http://localhost:4000/api/places',{
        method:'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log('Place add response:', data);
          alert('Place added successfully!');

          // Reset form values
          setTitle('');
          setLocation('');
          setDescription1('');
          setDescription2('');
          setDescription3('');
          setImage1(null);
          setImage2(null);
          setImage3(null);
          setImage4(null);
          setDisplayedImage1(null);
          setDisplayedImage2(null);
          setDisplayedImage3(null);
          setDisplayedImage4(null);

          

        })
        .catch(error=>{
          console.error('Error udding place:', error);
          alert('Place added failed!');
        });
  };

  
  return (
    <div>
      <AdminMenu />
      
      <div className='adminContainer'>
      
      <h1>Add Place Details</h1>
        <div class="container">
          <form onSubmit={handleFormSubmit} >
            <div class="row">
              <div class="col-25">
                <label>
                  Title:
                  <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="Title" />
                  {titleError && <div className="error-message">{titleError}</div>}
                </label>
                <br />
                <label>
                  Location:
                  <input type="text" name="location" value={location} onChange={handleInputChange} placeholder="Location" />
                  {locationError && <div className="error-message">{locationError}</div>}
                </label>
                <br />
                <label>
                  Description 1:
                  <textarea name="description1" value={description1} onChange={handleInputChange} placeholder="Description 1"/>
                </label>
                <br />
                <label>
                  Description 2:
                  <textarea name="description2" value={description2} onChange={handleInputChange} placeholder="Description 2"/>
                </label>
                <br />
                <label>
                  Description 3:
                  <textarea name="description3" value={description3} onChange={handleInputChange} placeholder="Description 3"/>
                </label>
              </div>
              <br />
              <div class="col-75">
                <label htmlFor="image1">Image 1:</label>
                <input type="file" name="image1" id="image1" accept="image/*" onChange={handleImage1Change} /><br />
                {displayedImage1 && <img src={displayedImage1} alt="Image 1" />}
                {image1Error && <div className="error-message">{image1Error}</div>}<br />

                <label htmlFor="image2">Image 2:</label>
                <input type="file" name="image2" id="image2" accept="image/*" onChange={handleImage2Change} /><br />
                {displayedImage2 && <img src={displayedImage2} alt="Image 1" />}<br />

                <label htmlFor="image3">Image 3:</label>
                <input type="file" name="image3" id="image3" accept="image/*" onChange={handleImage3Change} /><br />
                {displayedImage3 && <img src={displayedImage3} alt="Image 1" />}<br />

                <label htmlFor="image4">Image 4:</label>
                <input type="file" name="image4" id="image4" accept="image/*" onChange={handleImage4Change} /><br />
                {displayedImage4 && <img src={displayedImage4} alt="Image 1" />}<br />

              </div>
        
            </div>
            <br />
            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
    </div>
    </div>
    
  );
}

export default HeritagePlaceForm;
