import * as express from 'express';
import { createLocation, getAllLocations, createDistrict, updateLocation, deleteLocation, updateDistrict } from '../controllers/LocationController';


export default (app) => {
    const apiRoutes = express.Router();
    const locationRoutes = express.Router();

    apiRoutes.use('/location', locationRoutes);


    // create a location
    locationRoutes.post('/', createLocation);

    // get all locations
    locationRoutes.get('/', getAllLocations);

    // add a district
    locationRoutes.put('/district/:location_id', createDistrict);

    // update location
    locationRoutes.put('/:location_id', updateLocation);

    // delete location
    locationRoutes.delete('/:location_id', deleteLocation);

    // update district
    locationRoutes.put('/district/update/:district_id', updateDistrict);

    app.use('/api/v1', apiRoutes);
}