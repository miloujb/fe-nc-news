import React, { Component } from "react";
import { getAllArticles } from "../API/api";
import { Link } from "@reach/router";
import Sorter from "./Sorter";

class ArticlesByTopic extends Component {
  state = {
    sameTopicArticles: null,
    isLoading: true
  };

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  fetchAllArticles = (sort_by, order) => {
    const { topic } = this.props;
    getAllArticles(topic, sort_by, order).then(articles => {
      this.setState({ sameTopicArticles: articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, sameTopicArticles } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <Sorter fetchAllArticles={this.fetchAllArticles} />
        <ul>
          {sameTopicArticles.map(sameTopicArticle => {
            const {
              article_id,
              title,
              comment_count,
              votes,
              created_at
            } = sameTopicArticle;
            return (
              <Link to={`/articles/${article_id}`} key={article_id}>
                <li key={article_id}>{title}</li>
                <p>Comments: {comment_count}</p>
                <p>Votes: {votes}</p>
                <p>Date: {new Date(created_at).toLocaleString()}</p>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesByTopic;
