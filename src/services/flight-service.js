const { StatusCodes } = require('http-status-codes');

const { Op }  = require('sequelize');

const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch(error) {
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    // trips = MUM-DEL
    let customFilter = {};
    let sortFilter = [];
    const endTripTime = "23:59:59";
 
    if(query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId =  arrivalAirportId;
        // FutureWork = Suppossed to add a check that they are not the same
    }
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 200000: maxPrice)]
        }
    }

    if (query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if (query.tripDate) {
        customFilter.departureTime = {
            [Op.gte]: query.tripDate
            // [Op.between]: [query.tripDate, query.tripDate+endTripTime]
        }
    }
    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param) =>param.split(','));
        sortFilter = sortFilters
    }

        try {
            const flight = await flightRepository.getAllFlights(customFilter);
            return flight;
        } catch (error) {
            throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
        }
}

module.exports = {
    createFlight,
    getAllFlights
} 