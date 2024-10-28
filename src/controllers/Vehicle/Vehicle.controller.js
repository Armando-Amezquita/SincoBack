const Vehicles = require("../../models/Vehicles.model");

class ClassVehicles {
  static async getAll() {
    try {
        const vehicles = await Vehicles.find().sort({ createdAt: -1 });
        return vehicles;
    } catch (error) {
        return { data: [], success: false };
    }
  }

  static async getById(id) {
    const vehicle = await Vehicles.findById(id);
    return vehicle;
  }

  static async createVehicle(vehicle) {
    try {
      const newVehicle = new Vehicles(vehicle);
      const savedVehicle = await newVehicle.save();
      return savedVehicle;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  static async updateVehicle(_id, vehicle) {
    try {
      const updateVehicle = await Vehicles.findByIdAndUpdate({ _id }, vehicle, {new: true});
      return updateVehicle;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  static async sellVehicle(_id) {
    try {
      const updateVehicle = await Vehicles.findByIdAndUpdate({ _id }, { sold: true }, {new: true});
      return updateVehicle;
    } catch (error) {
      throw new Error("Error creating user: " + error.message);
    }
  }

  static async valueSummary(){
    try {
        console.log('ingresa')
        const result = await Vehicles.aggregate([
            // Filtrar documentos donde "value" no esté vacío
            {
                $match: {
                    value: { $ne: "" }  // Asegúrate de que 'value' no sea una cadena vacía
                }
            },
            {
                $group: {
                    _id: {
                        typeVehicle: "$typeVehicle",
                        model: "$model"
                    },
                    totalValue: { $sum: { $toDouble: "$value" } }
                }
            },
            {
                $project: {
                    _id: 0,
                    typeVehicle: "$_id.typeVehicle",
                    model: "$_id.model",
                    totalValue: 1
                }
            }
        ]);

        
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Error to show result: " + error.message);
    }
  }
  
}

module.exports = { ClassVehicles };