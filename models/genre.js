let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GenreSchema = new Schema(
    {
        name: {type: String, min: 3, max: 100, required: true}
    }
);


// Virtual for this genre instance URL
GenreSchema
.virtual('url')
.get(function() {
    return '/genre/'+this._id;
});


// Export model
module.exports = mongoose.model('Genre', GenreSchema);
