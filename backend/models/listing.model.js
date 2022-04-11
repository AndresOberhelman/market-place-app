const mongoose = require('mongoose');
const listingSchema = new mongoose.Schema({
    title: { type: String, required: true},
    price: {type: Number, required: true},
    tag: {type: String},
    // owner: {mongoose.SchemaTypes.ObjectId, reuired: true}
    // wishlist: []
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing