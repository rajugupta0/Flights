const { StatusCodes }= require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');


function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'flightNumber not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.airplaneId) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'airplaneId not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureAirportId) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'departureAirport Id not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.arrivalAirportId) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'arrivalAirport Id not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.arrivalTime) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'arrivalTime not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureTime) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'departureTime not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.price) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'price not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.totalSeats) {
        ErrorResponse.messsage = 'Something went wrong while creating flight. Please try again';
        ErrorResponse.error = new AppError([ 'totalSeats not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}