const express = require('express');
const router = express.Router();
const HotelBooking = require('../models/hotelBookings');

// Add reservation details
router.post('/', async (req, res) => {
  try {
    const hotelbooking = new HotelBooking(req.body);
    await hotelbooking.save();
    res.status(201).json(hotelbooking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all reservation details
router.get('/', async (req, res) => {
  try {
    const hotelbookings = await HotelBooking.find();
    res.json(hotelbookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve reservation details by ID
router.get('/:id', async (req, res) => {
  try {
    const hotelbooking = await HotelBooking.findById(req.params.id);
    if (!hotelbooking) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(hotelbooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update reservation record
router.put('/:id', async (req, res) => {
  try {
    const hotelbooking = await HotelBooking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hotelbooking) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json(hotelbooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a reservation record
router.delete('/:id', async (req, res) => {
  try {
    const hotelbooking = await HotelBooking.findByIdAndDelete(req.params.id);
    if (!hotelbooking) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.json({ message: 'Reservation deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
