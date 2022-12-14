import connectMongo, { closeMongo } from "../../../utils/connectMongo";
import VolunteerModal from "../../../utils/VolunteerModal";

export default async function handler(req, res) {
  try {
    await connectMongo();
    const {
      name,
      aadhar,
      gender,
      birthdate,
      age,
      state,
      district,
      block,
      vidhansabha,
      email,
      mobilenumber,
      address,
    } = req.body;
    if (!name || !aadhar || !email || !mobilenumber) {
      return res.status(422).json({ error: "Please add all the fields" });
    }
    const volunteer = await VolunteerModal.findOne({ mobilenumber });
    if (volunteer) {
      return res
        .status(422)
        .json({ error: "Volunteer already exists with that number" });
    }
    const newVolunteer = await VolunteerModal.create({
      name,
      aadhar,
      gender,
      birthdate,
      age,
      state,
      district,
      block,
      vidhansabha,
      email,
      mobilenumber,
      address,
    });
    await closeMongo();
    return res
      .status(200)
      .json({ message: "Volunteer created successfully", newVolunteer });
  } catch (error) {
    await closeMongo();
    return res.status(500).json({ error: error.message });
  }
}
