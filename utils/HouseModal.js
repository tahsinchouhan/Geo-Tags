const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
  {
    hodname: {
      type: String,
      required: true,
    },
    housenumber: {
      type: Number,
      required: true,
    },
    numberofresidents: {
      type: Number,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    landmark: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    block: {
      type: String,
      required: true,
    },
    vidhan: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const HouseModal =
  mongoose.models.house || mongoose.model("house", houseSchema);

module.exports = HouseModal;
