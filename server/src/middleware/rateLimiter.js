import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 messages
  message: {
    success: false,
    message: "Too many messages sent. Try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
