const { StatusCodes }= require('http-status-codes');

const { ErrorResponse } = require('../utils/common');


function validateCreateRequest(req,res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.messsage = 'Something went wrong while creating airplane. Please try again';
        ErrorResponse.error = 'Model Number not found in incoming request in the correct form';
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
}