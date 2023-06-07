const { StatusCodes }= require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');


function validateCreateRequest(req,res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.messsage = 'Something went wrong while creating airplane. Please try again';
        ErrorResponse.error = new AppError([ 'Model Number not found in incoming request in the correct form', StatusCodes.BAD_REQUEST ]);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}