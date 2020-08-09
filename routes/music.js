let express = require('express');
let router = express.Router();

// Controller modules
let song_controller = require('../controllers/songController');
let genre_controller = require('../controllers/genreController');
let review_controller = require('../controllers/reviewController');

/// SONG ROUTES ///

// GET Home.
router.get('/', song_controller.index);

// POST request for creating a song
router.post('/song/create', song_controller.song_create_post);

// DELETE request for deleting a song
router.delete('/song/:id/delete', song_controller.song_delete);

// PUT request for updating a song
router.put('/song/:id/update', song_controller.song_update);

// GET request for a specific song
router.get('/song/:id', song_controller.song_detail);

// GET request for List of all Songs.
router.get('/songs', song_controller.song_list);


/// REVIEW ROUTES ///

// POST request for creating a review
router.post('/review/create', review_controller.review_create_post);

// DELETE request for deleting a review
router.delete('/review/:id/delete', review_controller.review_delete);

// PUT request for updating a review
router.put('/review/:id/update', review_controller.review_update);

// GET request for a specific review
router.get('/review/:id', review_controller.review_detail);

// GET request for List of all reviews.
router.get('/reviews', review_controller.review_list);


/// GENRE ROUTES ///

// POST request for creating a genre
router.post('/genre/create', genre_controller.genre_create_post);

// DELETE request for deleting a genre
router.delete('/genre/:id/delete', genre_controller.genre_delete);

// PUT request for updating a genre
router.put('/genre/:id/update', genre_controller.genre_update);

// GET request for a specific genre
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for List of all genres.
router.get('/genres', genre_controller.genre_list);


module.exports = router;

