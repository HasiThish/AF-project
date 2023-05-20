const express = require('express');
const Restaurant = require('../models/restaurants');
const router = express.Router();

//Add new restaurant  
router.post('/', async (req, res) => {
    try {
      const restaurant = new Restaurant(req.body);
      await restaurant.save();
      return res.status(200).json({
        success: "Restaurant saved successfully"
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        //error: "Error saving post"
        error:err
      });
    }
  });

  router.post('/:id/book', async (req, res) => {
    try {
      const restaurantId = req.params.id;
  
      // Find the restaurant by ID
      const restaurant = await Restaurant.findById(restaurantId);
  
      if (!restaurant) {
        return res.status(404).json({ error: 'Restaurant not found' });
      }
  
      // Check if the booking capacity is available
      if (restaurant.res_booking >= 1) {
        // Decrease the booking capacity by 1
        restaurant.res_booking -= 1;
        await restaurant.save();
  
        return res.status(200).json({ message: 'Booking successful' });
      } else {
        return res.status(400).json({ error: 'No booking capacity available' });
      }
    } catch (error) {
      console.error('Error booking restaurant:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

//GET all restaurants   
router.get('/', (req, res) => {
    Restaurant.find()
      .then((restaurants) => {
        res.status(200).json(restaurants);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
  

//GET route to fetch restaurants based on the district  
router.get('/:district', (req, res) => {
    const district = req.query.district;
    Restaurant.find({ res_district: district })
      .then((restaurants) => {
        res.status(200).json(restaurants);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });

// Update heritage place by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phone, province, district, city } = req.body;

  try {
    // Find the restaurant by its ID
    const restaurant = await Restaurant.findById(id);

    // Update the restaurant details
    restaurant.res_name = name;
    restaurant.res_phone = phone;
    restaurant.res_province = province;
    restaurant.res_district = district;
    restaurant.res_city = city;

    // Save the updated restaurant
    const updatedRestaurant = await restaurant.save();

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    console.error('Error updating restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);

    if (!deletedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    return res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error('Error deleting restaurant:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;