import * as express from 'express';
import { createLocation, getAllLocations, createDistrict, updateLocation, updateDistrict } from '../controllers/LocationController'


export default (app) => {
    const apiRoutes = express.Router();
    const locationRoutes = express.Router();

    apiRoutes.use('/location', locationRoutes);

    // create a location
    locationRoutes.post('/', createLocation);

    // get all locations
    locationRoutes.get('/', getAllLocations);

    // add a district
    locationRoutes.post('/district/:id', createDistrict);

    // update location
    locationRoutes.put('/:id', updateLocation);

    // update district
    locationRoutes.put('/district/:id', updateDistrict);

    app.use('/api/v1', apiRoutes);
}