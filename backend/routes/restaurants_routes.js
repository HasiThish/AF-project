const express = require('express');
const Restaurant = require('../models/restaurants');
const router = express.Router();

//Add new restaurant  
router.post('/', async (req, res) => {
    // console.log("Inside post method");
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
  
/* router.post('/restaurants/save', async(req , res) => {
    try
    {
        const restaurant = new Restaurant({
            res_id:req.body.res_id,
            res_name:req.body.res_name,
            res_phone:req.body.res_phone,
            res_province:req.body.res_province,
            res_district:req.body.res_district,
            res_city:req.body.res_city
        });
        await restaurant.save();
        res.send(restaurant);
    } catch (err) {
        res.status(500).send(err);
    }
}); */

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


/*   router.delete('/:id',(req,res)=>{
    //const _id = req.query._id;
    Restaurant.findByIdAndRemove(
      req.params._id
    ).exec()
    .then((deletedRestaurant)=>{
      return res.status(200).json({
        success:"Deleted successfully!", deletedRestaurant
      });
    })
    .catch((err)=>{
      return res.status(400).json({
        error:err
      });
    });
  }); */

/* router.get('/restaurants', async(req,res)=>{
    try {
        //Assign the value from the query, to a variable.   
        const selectedDistrict = req.query.District;
        const restaurants = await Restaurant.find({
            res_district: selectedDistrict
        });
        res.status(200).json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:',error);
        res.status(500).json({error:'Internal server error'});
    }
}); */

module.exports = router;