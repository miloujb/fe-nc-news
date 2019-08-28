import React, { Component } from "react";
import { getAllArticles } from "../API/api";
import { Link } from "@reach/router";

class ArticlesByTopic extends Component {
  state = {
    sameTopicArticles: null,
    isLoading: true
  };

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  fetchAllArticles = () => {
    getAllArticles(this.props.topic).then(articles => {
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
            return (
              <Link to={`/articles/${article_id}`}>
                <li key={article_id}>{title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesByTopic;