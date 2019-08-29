import React, { Component } from "react";
import { getAllArticles } from "../API/api";
import { Link } from "@reach/router";
import Sorter from "./Sorter";

class AllArticles extends Component {
  state = {
    isLoading: true,
    allArticles: null
  };

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  fetchAllArticles = (topic, sort_by, order) => {
    getAllArticles(topic, sort_by, order).then(articles => {
      this.setState({ allArticles: articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, allArticles } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <Sorter fetchAllArticles={this.fetchAllArticles} />
        <ul>
          {allArticles.map(article => {
            const {
              article_id,
              title,
              comment_count,
              votes,
              created_at
            } = article;
            return (
              <Link
                to={`/articles/${article_id}`}
                article_id={article_id}
                key={article_id}
              >
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

export default AllArticles;
