const router = require('express').Router();
let Vehicle = require('../naween/vehicle');


const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
});


const upload = multer({ storage: storage });

const fs = require('fs');
//const path = require('path');
const { promisify } = require('util');

//get product details
router.route('/').get((req, res) => {
    Vehicle.find()
      .then(vehicles => res.json(vehicles))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/add', upload.single('image'), async (req, res) => {
    try {
      const { vehicleName, vehicleType, passengers, perDayKm, vTermsAndCond, ownerName, ownerEmail,nic } = req.body;
      const image = req.file ? req.file.path : '';
      
      // Read the uploaded image file
      const readFile = promisify(fs.readFile);
      const imageData = await readFile(req.file.path);
  
      // Encode the image data to Base64
      const base64Image = imageData.toString('base64');
  
      const newVehicle = new Vehicle({
        vehicleName,
        vehicleType,
        passengers,
        perDayKm,
        vTermsAndCond,
        ownerName,
        ownerEmail,
        nic,
        image: base64Image // Save the Base64 encoded image string to the database
      });
  
      const savedVehicle = await newVehicle.save();
      res.status(201).json({ savedVehicle, imageUrl: image });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

//add 
// router.route('/add').post((req, res) => {
//     const vehicleName = req.body.vehicleName;
//     const vehicleType = req.body.vehicleType;
//     const passengers = req.body.passengers;
//     const perDayKm = req.body.perDayKm;
//     const vTermsAndCond = req.body.vTermsAndCond;
//     const ownerName = req.body.ownerName;
//     const ownerEmail = req.body.ownerEmail;
//     const nic = req.body.nic;
    

//     const newVehicle = new Vehicle({
//         vehicleName,
//         vehicleType,
//         passengers,
//         perDayKm,
//         vTermsAndCond,
//         ownerName,
//         ownerEmail,
//         nic

        
       
//       });
  
//   //save add
//   newVehicle.save()
//     .then(() => res.json('New Vehicle successfully added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });  

  //delete
router.route('/:id').delete((req, res) => {
    Vehicle.findByIdAndDelete(req.params.id)
      .then(() => res.json('Vehicle successfully deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//update
router.route('/update/:id').put((req, res) => {
    Vehicle.findById(req.params.id)
    .then(vehicle => {
        vehicle.vehicleName = req.body.vehicleName;
        vehicle.vehicleType = req.body.vehicleType;
        vehicle.passengers = req.body.passengers;
        vehicle.perDayKm = req.body.perDayKm;
        vehicle.vTermsAndCond = req.body.vTermsAndCond;
        vehicle.ownerName = req.body.ownerName;
        vehicle.ownerEmail = req.body.ownerEmail;
        vehicle.nic = req.body.nic;
      

        vehicle.save()
        .then(() => res.json('Vehicle successfully updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//get by id

router.route('/:id').get((req, res) => {
    Vehicle.findById(req.params.id)
   .then(vehicles => res.json(vehicles))
   .catch(err => res.status(400).json('Error:'+ err));
});

module.exports = router;