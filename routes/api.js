const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/v1/weather', function(req, res, next) {
    let weatherData = {
      "Temp":90.5,
      "Unit": "fahrenheit",
      "Cloudy":false,    
      "PrecipitationChance":0
    }

    res.send(weatherData);
  });

module.exports = router;
