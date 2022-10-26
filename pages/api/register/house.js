import connectMongo, { closeMongo } from "../../../utils/connectMongo";
import HouseModal from "../../../utils/HouseModal";

export default async function handler(req, res) {
  try {
    await connectMongo();
    const {
      hodname,
      housenumber,
      numberofresidents,
      pincode,
      landmark,
      district,
      block,
      vidhan,
      address,
      latitude,
      longitude,
    } = req.body;
    if (
      !housenumber ||
      !pincode ||
      !landmark ||
      !district ||
      !block ||
      !vidhan
    ) {
      return res.status(422).json({ error: "Please add all the fields" });
    }

    const newHouse = await HouseModal.create({
      hodname,
      housenumber,
      numberofresidents,
      pincode,
      landmark,
      district,
      block,
      vidhan,
      address,
      latitude,
      longitude,
    });
    await closeMongo();
    return res
      .status(200)
      .json({ message: "House created successfully", newHouse });
  } catch (error) {
    await closeMongo();
    return res.status(500).json({ error: error.message });
  }
}
