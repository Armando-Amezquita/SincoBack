const { Schema, model } = require("mongoose");

const TYPEVEHICLE = ['motorcicle', 'car'];

const vehicleSchema = new Schema(
  {
    model: { type: String, trim: true },
    color: {type: String, trim: true},
    km: { type: Number, trim: true },
    value: { type: String, trim: true },
    registerDate: { type: Date, default: new Date },
    img: { type: String },
    popular: { type: Boolean, default: false },
    cilindraje: { type: String, trim: true },
    vehicleNew: { type: Boolean, default: false },
    sold: { type: Boolean, default: false },
    typeVehicle: { type: String, enum: TYPEVEHICLE },
    calification: { type: Number }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Vehicles", vehicleSchema);
 