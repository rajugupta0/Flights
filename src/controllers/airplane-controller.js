const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common'); 
// const { getAirplanes } = require('../services/airplane-service');
// const { response } = require('express');

/* POST : /airplanes
req-body {modelNumber: 'airbus320',capacity: 200}
*/
async function createAirplane(req,res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
                  
    } catch (error) {
        ErrorResponse.error = error;
        return res
                // .status(error.statusCodes)
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try{
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);

    }catch(error) {
        ErrorResponse.error = error;
        return res
                // .status(error.statusCodes)
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    
}

module.exports = {
    createAirplane,
    getAirplanes
}