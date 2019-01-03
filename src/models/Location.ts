const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const districtSchema = new Schema({
    district_name: { type: String, required: true },
    male: { type: Number, default: 0},
    female: { type: Number, default: 0}
},
    {
        toObject: {
            virtuals: true
        },
        toJSON:  {
            virtuals: true
        }
    });

districtSchema.virtual('total').get(function() {
    return this.male + this.female;
});

const locationSchema = new Schema({
    location_name:  { type: String, required: true },
    male: { type: Number, default: 0},
    female: { type: Number, default: 0},
    district: [districtSchema]
},
    {
        toObject: {
            virtuals: true
        },
        toJSON:  {
            virtuals: true
        }
    }
);

locationSchema.virtual('total').get(function() {
    return this.male + this.female;
});

module.exports = mongoose.model('Location', locationSchema);
