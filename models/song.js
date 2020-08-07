let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SongSchema = new Schema(
    {
        title: {type: String, required: true},
        artist: {type: String, required: true},
        album: {type: String, required: true},
        year: {type: Number, min: 1850, required: true},
        genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
        review: [{type: Schema.Types.ObjectId, ref: 'Review'}]
    }
);


// Virtual for song's rating
SongSchema
.virtual('rating')
.get(function() {
    let review_numbers = this.review.length;
    let average_rating = 0;
    for(let eachReview of this.review){
        average_rating += eachReview.star;
    }
    return average_rating/review_numbers;
});



// Export model
module.exports = mongoose.model('Song', SongSchema);