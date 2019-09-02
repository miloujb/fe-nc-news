import React, { Component } from "react";
import { getAllArticles } from "../API/api";
import { Link } from "@reach/router";
import Sorter from "./Sorter";
import Error from "../OtherComponents/Error";
import Spinner from "../OtherComponents/Spinner";

class ArticlesByTopic extends Component {
  state = {
    sameTopicArticles: null,
    isLoading: true,
    error: null
  };

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  fetchAllArticles = (sort_by, order) => {
    const { topic } = this.props;
    getAllArticles(topic, sort_by, order)
      .then(articles => {
        this.setState({ sameTopicArticles: articles, isLoading: false });
      })
      .catch(error => {
        const { status, statusText } = error.response;
        this.setState({ error: { status, statusText }, isLoading: false });
      });
  };

  render() {
    const { isLoading, sameTopicArticles, error } = this.state;
    if (error) return <Error error={error} />;
    if (isLoading) return <Spinner />;
    return (
      <div class="container">
        <Sorter fetchAllArticles={this.fetchAllArticles} topic={this.topic} />
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
              <div class="article" key={article_id}>
                <Link to={`/articles/${article_id}`}>
                  <li>{title}</li>
                </Link>
                <p>Comments: {comment_count}</p>
                <p>Votes: {votes}</p>
                <p>Date: {new Date(created_at).toLocaleString()}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticlesByTopic;
