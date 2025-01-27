const axios = require('axios');
const OMDB_API_KEY = "e6159d06"

// getting the data from favorite
const searchMovies = async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`);
    if (response.data.Response === 'True') {
      res.json(response.data.Search);
    } else {
      res.status(404).json({ error: response.data.Error });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from OMDB API' });
  }
};

module.exports = { searchMovies };
