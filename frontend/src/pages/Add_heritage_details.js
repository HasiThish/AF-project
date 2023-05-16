import React, { useState } from 'react';
import axios from 'axios';
import '../styles/add_heritage.css';
import AdminMenu from './Admin_menu'
import '../styles/admin.css'

function AddHeritagePlaceForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');
  const [description3, setDescription3] = useState('');
  const [imgmain, setImgmain] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [dragging, setDragging] = useState(false);
  const [showImgmain, setShowImgmain] = useState(false);
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(false);
  const [showImg3, setShowImg3] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/heritagePlaces', {
        title,
        location,
        description1,
        description2,
        description3,
        imgmain,
        img1,
        img2,
        img3
      });
      onSubmit(response.data);
      setTitle('');
      setLocation('');
      setDescription1('');
      setDescription2('');
      setDescription3('');
      setImgmain('');
      setImg1('');
      setImg2('');
      setImg3('');
      setShowImgmain(false);
      setShowImg1(false);
      setShowImg2(false);
      setShowImg3(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e, setImage, setShowImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setShowImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e, setImage, setShowImage) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setShowImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseImage = (setImage, setShowImage) => {
    setImage('');
    setShowImage(false);
  };

  return (
    <div>
      <AdminMenu />
      
      <div className='adminContainer'>
      <h1>Add Place Details</h1>
      <div class="container">
      <form onSubmit={handleSubmit} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
      <div class="row">
      <div class="col-25">
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Description 1:
        <textarea value={description1} onChange={e => setDescription1(e.target.value)} />
      </label>
      <br />
      <label>
        Description 2:
        <textarea value={description2} onChange={e => setDescription2(e.target.value)} />
  </label>
  <br />
  <label>
    Description 3:
    <textarea value={description3} onChange={e => setDescription3(e.target.value)} />
  </label>
      </div>
  <br />
  <div class="col-75">
  <label>
    Main Image:
    {showImgmain ? (
      <div className="img-container">
        <img src={imgmain} alt="main" />
        <button className="close-btn" onClick={() => handleCloseImage(setImgmain, setShowImgmain)}>
          X
        </button>
      </div>
    ) : (
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onClick={() => document.getElementById('mainImageInput').click()}
      >
        <input
          type="file"
          id="mainImageInput"
          accept="image/*"
          onChange={e => handleImageChange(e, setImgmain, setShowImgmain)}
          style={{ display: 'none' }}
        />
        <p>Drag and drop an image or click to select a file</p>
      </div>
    )}
  </label>
  <br />
  <label>
    Image 1:
    {showImg1 ? (
      <div className="img-container">
        <img src={img1} alt="img1" />
        <button className="close-btn" onClick={() => handleCloseImage(setImg1, setShowImg1)}>
          X
        </button>
      </div>
    ) : (
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onClick={() => document.getElementById('image1Input').click()}
      >
        <input
          type="file"
          id="image1Input"
          accept="image/*"
          onChange={e => handleImageChange(e, setImg1, setShowImg1)}
          style={{ display: 'none' }}
        />
        <p>Drag and drop an image or click to select a file</p>
      </div>
    )}
  </label>
  <br />
  <label>
    Image 2:
    {showImg2 ? (
      <div className="img-container">
        <img src={img2} alt="img2" />
        <button className="close-btn" onClick={() => handleCloseImage(setImg2, setShowImg2)}>
          X
        </button>
      </div>
    ) : (
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onClick={() => document.getElementById('image2Input').click()}
      >
        <input
          type="file"
          id="image2Input"
          accept="image/*"
          onChange={e => handleImageChange(e, setImg2, setShowImg2)}
          style={{ display: 'none' }}
        />
        <p>Drag and drop an image or click to select a file</p>
      </div>
    )}
  </label>
  <br />
  <label>
    Image 3:
    {showImg3 ? (
      <div className="img-container">
        <img src={img3} alt="img3" />
        <button className="close-btn" onClick={() => handleCloseImage(setImg3, setShowImg3)}>
          X
        </button>
      </div>
    ) : (
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onClick={() => document.getElementById('image3Input').click()}
      >
        <input
          type="file"
          id="image3Input"
          accept="image/*"
          onChange={e => handleImageChange(e, setImg3, setShowImg3)}
          style={{ display: 'none' }}
          />
          <p>Drag and drop an image or click to select a file</p>
        </div>
      )}
    </label>
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
export default AddHeritagePlaceForm;