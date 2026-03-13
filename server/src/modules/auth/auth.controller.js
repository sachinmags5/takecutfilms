import Admin from "./auth.model.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email, password });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      admin,
    });
  } catch (error) {
    next(error);
  }
};
