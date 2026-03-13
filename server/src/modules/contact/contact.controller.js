import * as contactService from "./contact.service.js";
import { sendMail } from "../../utils/sendMail.js";
import validator from "validator";

export const createContact = async (req, res, next) => {
  try {
    const contact = await contactService.createContact(req.body);

    res.status(201).json({
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    next(error);
  }
};

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    await sendMail({ name, email, message });

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};
