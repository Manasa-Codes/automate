
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const UserModel = require('./models/Users');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/socio');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/Images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('file'), (req, res) => {
//     const { caption, platforms } = req.body; // Extract caption and platforms from the request body
  
//     if (!req.file) {
//       return res.status(400).send('No file uploaded');
//     }
  
//     // Log data to ensure it's received correctly
//     console.log("Received caption:", caption);
//     // console.log("Received platforms:", platforms);
  
//     // Store image, caption, and platforms in the database
//     UserModel.create({
//       image: req.file.filename, // Store image filename
//       caption: caption, // Store caption from request body
//     //   platforms: JSON.parse(platforms) // Parse platforms JSON string into an array
//     })
//     .then(result => res.json(result))
//     .catch(err => res.status(500).send('Error uploading data'));
//   });
  

// app.get('/getImage', (req, res) => {
//   UserModel.find()
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });


// app.listen(3001, () => {
//   console.log("Server is running");
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(passport.initialize());

mongoose.connect('mongodb://localhost:27017/socio');

// Configure the Facebook strategy for use by Passport
passport.use(new FacebookStrategy({
    clientID: '996033582270106', // Your App ID
    clientSecret: 'f80dcc9933f8d877970b3e34be9c442a', // Your App Secret
    callbackURL: 'http://localhost:3001/auth/facebook/callback', // Your redirect URI
    profileFields: ['id', 'displayName', 'photos', 'email'] // Specify fields to return
  },
  function(accessToken, refreshToken, profile, done) {
    // Here, you can save the user's profile information to the database
    // For now, we just log it
    console.log('Facebook Profile:', profile);
    return done(null, profile);
  }
));

// Auth route for Facebook
app.get('/auth/facebook', passport.authenticate('facebook'));

// Callback route for Facebook
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home or to another route
    res.redirect('/'); // Change this to the route you want to redirect to after login
  }
);

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const { caption, platforms } = req.body; // Extract caption and platforms from the request body

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  // Store image, caption, and platforms in the database
  UserModel.create({
    image: req.file.filename, // Store image filename
    caption: caption, // Store caption from request body
    // platforms: JSON.parse(platforms) // Uncomment if needed
  })
  .then(result => res.json(result))
  .catch(err => res.status(500).send('Error uploading data'));
});

app.get('/getImage', (req, res) => {
  UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
