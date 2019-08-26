import React, { Component } from "react";
import { getAllArticles } from "./api";

class ArticlesByTopic extends Component {
  state = {
    sameTopicArticles: null,
    isLoading: true
  };

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  fetchAllArticles = () => {
    getAllArticles().then(articles => {
      this.setState({ sameTopicArticles: articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, sameTopicArticles } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <ul>
          {sameTopicArticles.map(sameTopicArticle => {
            const { article_id, title } = sameTopicArticle;
            return <li key={article_id}>{title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesByTopic;
