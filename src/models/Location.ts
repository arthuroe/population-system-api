const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const districtSchema = new Schema({
    district_name: { type: String,  },
    male: Number,
    female: Number
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
    location_name: String,
    male: Number,
    female: Number,
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
