const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://maps.googleapis.com/maps/api/distancematrix';

const key = require('./config.json');

const staticMapUrl = 'https://maps.googleapis.com/maps/api/staticmap';



router.get("/", (req, res) => {
	res.send("API works");
})

// Get all posts
router.get('/maps', (req, res) => {
  //get distance matrix response from google maps APIs
  var origin = req.query.origin;
  var destination = req.query.destination;

  axios.get(API+'/json?'+'origins='+origin+"&destinations="+destination+"&key="+key.key)
    .then(maps => {
	  maps.data.mapUrl = staticMapUrl+"?maptype=roadmap&size=400x400&markers=color:blue%7C"+encodeURI(origin)+"&markers=color:green%7C"+encodeURI(destination)+"&key="+key.key;
      res.status(200).json(maps.data); // only querying one origin/destination pair
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
