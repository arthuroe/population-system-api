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
    locationRoutes.put('/district/:id', createDistrict);

    // update location
    locationRoutes.put('/:id', updateLocation);

    // delete location
    locationRoutes.delete('/:id', deleteLocation);

    // update district
    locationRoutes.put('/district/update/:id', updateDistrict);

    app.use('/api/v1', apiRoutes);
}