// create a volunteer model for mongo db with the following fields: name, email, number, address, city, state, country, pincode, latitude, longitude, and a timestamp

import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    aadhar: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    state: {
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
    vidhansabha: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    mobilenumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const VolunteerModal =
  mongoose.models.volunteer || mongoose.model("volunteer", volunteerSchema);

module.exports = VolunteerModal;
