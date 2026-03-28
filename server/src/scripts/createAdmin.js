import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "../modules/auth/user.model.js";

dotenv.config();

const createAdmin = async () => {
  try {
    // 1. Connect DB
    await mongoose.connect(process.env.MONGO_URI_LOCAL);
    console.log("DB connected");

    // 2. Check if admin already exists
    const existing = await User.findOne({ email: "admin@gmail.com" });

    if (existing) {
      console.log("Admin already exists");
      process.exit(0);
    }
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    // 3. Hash password
    const hashed = await bcrypt.hash(password, 10);

    // 4. Create admin
    await User.create({
      name: "Admin",
      email: email,
      password: hashed,
      role: "admin",
    });

    console.log("✅ Admin created successfully");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
};

createAdmin();
