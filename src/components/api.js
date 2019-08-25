import axios from "axios";

export const baseURL = "https://backend-nc-news.herokuapp.com/api";

export const getAllArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleCard = () => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
