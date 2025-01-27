const express = require('express');
const { searchMovies } = require('../controllers/omdbController');
const { addFavourite, getFavourites } = require('../controllers/favoriteCFontroller');
const router = express.Router();

// routes for api
router.get('/search', searchMovies);
router.post('/favourites', addFavourite);
router.get('/favourites', getFavourites);

module.exports = router;
