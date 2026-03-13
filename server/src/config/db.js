import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // // localhost;
    // await mongoose.connect(process.env.MONGO_URI_LOCAL);
    // //live
    await mongoose.connect(process.env.MONGO_URI_LIVE);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
