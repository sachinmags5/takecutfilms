import * as newsService from "./news.service.js";

export const getNews = async (req, res, next) => {
  try {
    const news = await newsService.getNews();
    res.json(news);
  } catch (error) {
    next(error);
  }
};

export const getSingleNews = async (req, res, next) => {
  try {
    const news = await newsService.getSingleNews(req.params.id);
    res.json(news);
  } catch (error) {
    next(error);
  }
};

export const createNews = async (req, res, next) => {
  try {
    const news = await newsService.createNews(req.body);
    res.status(201).json(news);
  } catch (error) {
    next(error);
  }
};
