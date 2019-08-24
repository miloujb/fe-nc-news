import axios from "axios";

export const baseURL = "https://backend-nc-news.herokuapp.com/api";

export const getAllArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};
