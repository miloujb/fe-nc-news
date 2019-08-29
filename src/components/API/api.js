import axios from "axios";

export const baseURL = "https://backend-nc-news.herokuapp.com/api";

export const getAllArticles = (topic, sort_by, order) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sort_by, order: order }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticleCard = article_id => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const getUser = username => {
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const postComment = ({ article_id, body, username }) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, { body, username })
    .then(({ data }) => {
      return data.comments;
    });
};

export const deleteComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};

export const patchVotes = (value, article_id) => {
  return axios.patch(`${baseURL}/articles/${article_id}`, { inc_votes: value });
};

export const patchCommentVotes = (comment_id, value) => {
  return axios.patch(`${baseURL}/comments/${comment_id}`, { inc_votes: value });
};
