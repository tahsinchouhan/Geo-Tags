import connectMongo, { closeMongo } from "../../../utils/connectMongo";
import UserModal from "../../../utils/UserModal";

export default async function handler(req, res) {
  console.log(req.body);
  try {
    await connectMongo();
    const { name, email, number } = req.body;
    if (!name || !number || !email) {
      return res.status(422).json({ error: "Please add all the fields" });
    }
    const user = await UserModal.findOne({ number });
    console.log("user", user);
    if (user) {
      return res
        .status(422)
        .json({ error: "User already exists with that number" });
    }
    const newUser = await UserModal.create({ name, email, number });
    await closeMongo();
    return res
      .status(200)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    await closeMongo();
    return res.status(500).json({ error: error.message });
  }
}
