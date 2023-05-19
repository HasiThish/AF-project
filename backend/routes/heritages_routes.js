const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const HeritagePlace = require('../models/heritages');

const upload = multer({ dest: 'uploads/' });

router.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Add new heritage place
router.post('/', upload.fields([
  {name:'image1'},
  {name:'image2'},
  {name:'image3'},
  {name:'image4'},
]), async (req,res)=>{
  try {
    const {title,location, description1,description2,description3} = req.body;
    const { image1, image2, image3, image4 } = req.files;
    const { originalname: originalname1, filename: filename1 } = image1[0];
    const { originalname: originalname2, filename: filename2 } = image2[0];
    const { originalname: originalname3, filename: filename3 } = image3[0];
    const { originalname: originalname4, filename: filename4 } = image4[0];

    const place = new HeritagePlace({
      title:title,
      location:location,
      description1:description1,
      description2:description2,
      description3:description3,
      filename1: originalname1,
      imagePath1: `/uploads/${filename1}`,// Provide the public URL for the image
      filename2: originalname2,
      imagePath2: `/uploads/${filename2}`,// Provide the public URL for the image
      filename3: originalname3,
      imagePath3: `/uploads/${filename3}`,// Provide the public URL for the image
      filename4: originalname4,
      imagePath4: `/uploads/${filename4}`,// Provide the public URL for the image
    
    });

    await place.save();

    res.status(200).json({message: 'Place added successfully!'});

  } catch (error) {
    res.status(404).json({error:'Error adding place: ', error});
    res.status(500).json({error:'Failed to add place.'});
  }
});



// Get all heritage places
router.get('/', async (req, res) => {
  try {
    const places = await HeritagePlace.find();
    res.status(200).json(places);
  } catch (error) {
    console.error('Error retrieving images:', error);
    res.status(500).json({ error: 'Failed to retrieve images.' });
  }
});

// Get single heritage place by ID
router.get('/place/:id', async (req, res) => {
  try {
    const heritagePlace = await HeritagePlace.findById(req.params.id);
    res.send(heritagePlace);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update heritage place by ID
router.put('/:id', upload.fields([
  { name: 'image1' },
  { name: 'image2' },
  { name: 'image3' },
  { name: 'image4' }
]), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, location, description1, description2, description3 } = req.body;
    const { image1, image2, image3, image4 } = req.files;
    const { originalname: originalname1, filename: filename1 } = image1[0];
    const { originalname: originalname2, filename: filename2 } = image2[0];
    const { originalname: originalname3, filename: filename3 } = image3[0];
    const { originalname: originalname4, filename: filename4 } = image4[0];

    const updatedPlace = await HeritagePlace.findByIdAndUpdate(
      id,
      {
        title,
        location,
        description1,
        description2,
        description3,
        filename1: originalname1,
        imagePath1: `/uploads/${filename1}`,
        filename2: originalname2,
        imagePath2: `/uploads/${filename2}`,
        filename3: originalname3,
        imagePath3: `/uploads/${filename3}`,
        filename4: originalname4,
        imagePath4: `/uploads/${filename4}`,
      },
      { new: true }
    );

    if (!updatedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.json(updatedPlace);
  } catch (error) {
    console.error('Error updating place:', error);
    res.status(500).json({ message: 'Error updating place' });
  }
});

// Delete heritage place by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlace = await HeritagePlace.findByIdAndDelete(req.params.id);

    if (!deletedPlace) {
      return res.status(404).json({ message: 'Place not found' });
    }

    res.json({ message: 'Place deleted successfully' });
  } catch (error) {
    console.error('Error deleting place:', error);
    res.status(500).json({ message: 'Error deleting place' });
  }
});

router.get('/places/:location', async (req, res) => {
  try {
    const location = req.params.location;

    // Query the database for places with the specified location
    const filteredPlaces = await HeritagePlace.find({ location });

    res.json(filteredPlaces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
