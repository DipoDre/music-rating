let Song = require('../models/song');

// Home.
exports.index = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: home'});
};

// List of all Songs.
exports.song_list = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: song list'});
};

// Details of a specific Song.
exports.song_detail = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: song detail:'}, req.params.id );
};

// Handle Song create on POST.
exports.song_create_post = function(req, res) {
    res.json({'NOT IMPLEMENTED':'song create POST'});
};

// Handle Song delete on DELETE.
exports.song_delete = function(req, res) {
    res.json({'NOT IMPLEMENTED':'song delete'});
};

// Handle Song update on PUT.
exports.song_update = function(req, res) {
    res.json({'NOT IMPLEMENTED':'song update'});
};
