const { StatusCodes }= require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');


function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.messsage = 'Something went wrong while creating airport. Please try again';
        ErrorResponse.error = new AppError([ 'name not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.code) {
        ErrorResponse.messsage = 'Something went wrong while creating airport. Please try again';
        ErrorResponse.error = new AppError([ 'code not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.cityId) {
        ErrorResponse.messsage = 'Something went wrong while creating airport. Please try again';
        ErrorResponse.error = new AppError([ 'city Id not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}