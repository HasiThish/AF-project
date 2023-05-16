const express = require('express');
const router = express.Router();
const HeritagePlace = require('../models/heritages');

// Add new heritage place
router.post('/heritagePlaces', async (req, res) => {
  const heritagePlace = new HeritagePlace({
    title: req.body.title,
    location: req.body.location,
    description1: req.body.description1,
    description2: req.body.description2,
    description3: req.body.description3,
    imgmain: req.body.imgmain,
    img1:req.body.img1,
    img2:req.body.img2,
    img3:req.body.img3
  });
  try {
    await heritagePlace.save();
    res.send(heritagePlace);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all heritage places
router.get('/heritagePlaces', async (req, res) => {
  try {
    const heritagePlaces = await HeritagePlace.find();
    res.send(heritagePlaces);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get single heritage place by ID
router.get('/heritagePlaces/:id', async (req, res) => {
  try {
    const heritagePlace = await HeritagePlace.findById(req.params.id);
    res.send(heritagePlace);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update heritage place by ID
router.patch('/heritagePlaces/:id', async (req, res) => {
  try {
    const heritagePlace = await HeritagePlace.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(heritagePlace);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete heritage place by ID
router.delete('/heritagePlaces/:id', async (req, res) => {
  try {
    await HeritagePlace.findByIdAndDelete(req.params.id);
    res.send({ message: 'Heritage place deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
