const router = require('express').Router();
let Insurance = require('../models/insurance.model');
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
  Insurance.find()
      .then(insurances => res.json(insurances))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//post
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { insurenceName, insurenceType, howManyYears, cOptions, exAndCond, termsAndCond } = req.body;
    const image = req.file ? req.file.path : '';
    
    // Read the uploaded image file
    const readFile = promisify(fs.readFile);
    const imageData = await readFile(req.file.path);

    // Encode the image data to Base64
    const base64Image = imageData.toString('base64');

    const newInsurance = new Insurance({
      insurenceName,
      insurenceType,
      howManyYears,
      cOptions,
      exAndCond,
      termsAndCond,
      image: base64Image // Save the Base64 encoded image string to the database
    });

    const savedInsurance = await newInsurance.save();
    res.status(201).json({ savedInsurance, imageUrl: image });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



router.get('/approved-insurances', async (req, res) => {
    try {
      const approvedInsurances = await Insurance.find({ status: 'approved' });
      res.status(200).json(approvedInsurances);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //get data from approved status
router.get('/approved', (req, res) => {
    Insurance.find({ status: 'approved' })
      .then(insurances => {
        res.json(insurances);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });




// //add 
// router.route('/add').post((req, res) => {
//     const insurenceName = req.body.insurenceName;
//     const insurenceType = req.body.insurenceType;
//     const howManyYears = req.body.howManyYears;
//     const cOptions = req.body.cOptions;
//     const exAndCond = req.body.exAndCond;
//     const termsAndCond = req.body.termsAndCond;
    

//     const newInsurance = new Insurance({
//       insurenceName,
//       insurenceType,
//       howManyYears,
//       cOptions,
//       exAndCond,
//       termsAndCond

        
       
//       });
  
//   //save add
//   newInsurance.save()
//     .then(() => res.json('New Insurance successfully added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });  



  //delete
router.route('/:id').delete((req, res) => {
  Insurance.findByIdAndDelete(req.params.id)
      .then(() => res.json('Insurance successfully deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//update
router.route('/update/:id').put((req, res) => {
  Insurance.findById(req.params.id)
    .then(insurance => {
      insurance.insurenceName = req.body.insurenceName;
      insurance.insurenceType = req.body.insurenceType;
      insurance.howManyYears = req.body.howManyYears;
      insurance.cOptions = req.body.cOptions;
      insurance.exAndCond = req.body.exAndCond;
      insurance.termsAndCond = req.body.termsAndCond;
      

      insurance.save()
        .then(() => res.json('Insurance successfully updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//get by id

router.route('/:id').get((req, res) => {
  Insurance.findById(req.params.id)
   .then(insurance => res.json(insurance))
   .catch(err => res.status(400).json('Error:'+ err));
});

router.patch('/:id/approve', async (req, res) => {
  try {
    const insurance = await Insurance.findById(req.params.id);
    if (!insurance) {
      return res.status(404).json({ message: 'Insurance not found' });
    }
    insurance.status = 'Approved';
    const updatedInsurance = await insurance.save();
    res.json(updatedInsurance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Update insurance status
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  const name = req.body.name;
  const email = req.body.email;
  const mobile = req.body.mobile;

  Insurance.findByIdAndUpdate(id, { status: status, name: name, email: email, mobile: mobile}, { new: true })
    .then(insurance => {
      res.json(insurance);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error updating insurance status");
    });
});



router.get('/insurances', async (req, res) => {
  try {
    const allInsurances = await Insurance.find();
    res.json(allInsurances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id/approve', (req, res) => {
  Insurance.findByIdAndUpdate(
    req.params.id,
    { status: 'approved' },
    { new: true }
  )
    .then(insurance => {
      res.json(insurance);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;