import Contact from "./contact.model.js";

export const createContact = async (data) => {
  return await Contact.create(data);
};
