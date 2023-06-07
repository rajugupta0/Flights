const { response } = require('express');
const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        console.log("inside repository");
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo: create');
            throw error;
        }
    }

    async destroy(data){
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
            }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo: destroy');
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findbyPK(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo: get');
            throw error;
        }

    }

    async getAll(){
        try {
            const response = await this.model.findAll;
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo: getAll');
            throw error;
            
        }
    }

    async update(id,data){
        try {
            response = await this.model.update(data, {
                where: {
                    id: id
                }
            })
            return response;
        } catch (error) {
            Logger.error('Something went wrong in Crud Repo: update');
            throw error;
        }
    }



}

module.exports = CrudRepository;