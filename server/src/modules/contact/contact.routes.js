import express from "express";
import { createContact, sendContactMessage } from "./contact.controller.js";
import { contactLimiter } from "../../middleware/rateLimiter.js";

const router = express.Router();

router.post("/", createContact);
router.post("/sendContactMessage", contactLimiter, sendContactMessage);

export default router;
