import News from "./news.model.js";

export const getNews = async () => {
  return await News.find().sort({ createdAt: -1 });
};

export const getSingleNews = async (id) => {
  return await News.findById(id);
};

export const createNews = async (data) => {
  return await News.create(data);
};
