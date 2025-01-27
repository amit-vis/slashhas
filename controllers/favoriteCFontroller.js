const Favourite = require('../models/favourite');

// controoler for creating the favorite
const addFavourite = async (req, res) => {
  try {
    const { title, year, type, poster } = req.body;
    if(!title || !year || !type || !poster) {
      return res.status(400).json({ error: 'Please provide all fields' });
    }
    const favourite = await Favourite.create({ title, year, type, poster });
    res.status(201).json(favourite);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save favourite' });
  }
};

// controller for fetching the favourite
const getFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.findAll();
    if(!favourites || favourites.length === 0) {
      return res.status(404).json({ error: 'No favourites found' });
    }
    res.json(favourites);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch favourites' });
  }
};

module.exports = { addFavourite, getFavourites };
