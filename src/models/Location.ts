const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    location_name: String,
    male: Number,
    female: Number,
    district: [{
        district_name: String,
        male: Number,
        female: Number
    }]
});

module.exports = mongoose.model('Location', locationSchema);
