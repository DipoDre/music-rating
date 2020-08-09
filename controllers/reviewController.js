let Review = require('../models/review');

// List of all Reviews.
exports.review_list = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: Review list'});
};

// Details of a specific Review.
exports.review_detail = function(req, res) {
    res.json({'Content':'NOT IMPLEMENTED: Review detail:'}, req.params.id );
};

// Handle Review create on POST.
exports.review_create_post = function(req, res) {
    res.json({'NOT IMPLEMENTED':'Review create POST'});
};

// Handle Review delete on DELETE.
exports.review_delete = function(req, res) {
    res.json({'NOT IMPLEMENTED':'Review delete'});
};

// Handle Review update on PUT.
exports.review_update = function(req, res) {
    res.json({'NOT IMPLEMENTED':'Review update'});
};
