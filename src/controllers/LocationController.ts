const Location = require('../models/Location');

// create a location
export function createLocation(req, res, next){
    const location_name = req.body.location_name;
    const male = req.body.male;
    const female = req.body.female;

    if (!location_name){
        res.status(422).json({ error: "location name is required" })
    }

    const location = new Location({ location_name, male, female});
    location.save((err, location) => {
        if (err){
            res.status(500).json({"status": "Failed", err});
        }
        res.status(201).json({ "status": "Success", "data": location})
    })
}

// get all locations
export function getAllLocations(req, res, next){
    Location.find((err, locations) => {
        if (err){
            res.status(500).json({"status": "Failed", err});
        }
        res.status(200).json({ "status": "Success", locations })
    })
}

// add a district
export function createDistrict(req, res, next){
    const id = req.params.location_id
    const  district = req.body;

    Location.findOneAndUpdate(id, { $push: {district: district}}, (err, district) => {
        if (err){
            res.status(500).json({err});
        }
        res.status(201).json({ "status": "Successfully Added a District" })
    })
}

// update location
export function updateLocation(req, res, next){
    const id  = req.params.location_id;
    const {location_name, male, female} = req.body;

    Location.findByIdAndUpdate(id, {location_name, male, female}, (err, location) => {
        if (err){
            res.status(500).json({err});
        }
        res.status(200).json({ "status": "Successfully Updated Location Data" })
    })
}

// delete location
export function deleteLocation(req, res, next){
    const id  = req.params.location_id;

    Location.findByIdAndRemove(id, (err, location) => {
        if (err){
            res.status(500).json({err});
        }
        res.status(200).json({ "status": "Successfully Deleted Location" })
    })
}

// update district
export function updateDistrict(req, res, next){
    const id  = req.params.district_id;

    Location.update({"district._id":id}, { $set: { "district.$": req.body } }, (err, district) => {
        if (err){
            res.status(500).json({err});
        }
        res.status(200).json({ "status": "Successfully Updated District Data" })
    })
}
