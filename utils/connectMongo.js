import mongoose from "mongoose";

console.log(process.env.MONGO_URI);
const connectMongo = async () => mongoose.connect(process.env.MONGO_URI);
export const closeMongo = async () => mongoose.connection.close();

export default connectMongo;
