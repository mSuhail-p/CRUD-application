import mongoose from "mongoose";

let connectMongo = async () => {
  await mongoose
    .connect(process.env.MONGODB_CONNECT as string)
    .then(() => {
      console.log("mongodb connection completed");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectMongo