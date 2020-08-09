let Genre = require('../models/genre');

// List of all Genres.
exports.genre_list = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: genre list'});
};

// Details of a specific Genre.
exports.genre_detail = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: genre detail:'}, req.params.id );
};

// Handle Genre create on POST.
exports.genre_create_post = function(req, res) {
    res.json({'NOT IMPLEMENTED':'genre create POST'});
};

// Handle Genre delete on DELETE.
exports.genre_delete = function(req, res) {
    res.json({'NOT IMPLEMENTED':'genre delete'});
};

// Handle Genre update on PUT.
exports.genre_update = function(req, res) {
    res.json({'NOT IMPLEMENTED':'genre update'});
};
