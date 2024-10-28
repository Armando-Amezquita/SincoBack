const { Router } = require("express");
const { ClassVehicles } = require('../controllers/Vehicle/Vehicle.controller.js')
const routerVehicles = Router();

routerVehicles.post( "/", async (req, res, next) => {
    try {      
      const response = await ClassVehicles.createVehicle(req.body);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

routerVehicles.put( "/sell/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await ClassVehicles.sellVehicle(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
);

routerVehicles.put( "/", async (req, res, next) => {
    try {
      const { _id, vehicle } = req.body;
      const response = await ClassVehicles.updateVehicle(_id, vehicle);
      res.status(200).json(response);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
);

routerVehicles.get("/value-summary", async (req, res, next) => {
    try {
      const response = await ClassVehicles.valueSummary();
      res.status(200).json(response);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
);

routerVehicles.get( "/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await ClassVehicles.getById(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
);

routerVehicles.get( "/", async (req, res, next) => {
    try {
      const response = await ClassVehicles.getAll();
      res.status(200).json(response);
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
);


module.exports = { 
  routerVehicles
};