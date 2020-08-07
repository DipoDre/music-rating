let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ReviewSchema = new Schema(
    {
        star: {type: Number, min: 1, max: 5, required: true},
        comment: {type: String, maxlength: 1000},
    }
);

// Export model
module.exports = mongoose.model('Review', ReviewSchema);
