import React, { Component } from "react";
import { getAllArticles } from "../API/api";
import { Link } from "@reach/router";
import Sorter from "./Sorter";
import Error from "./Error";
import Spinner from "../Spinner";

class AllArticles extends Component {
  state = {
    isLoading: true,
    allArticles: null,
    error: null
  };

  componentDidMount = () => {
    this.fetchAllArticles();
  };

  fetchAllArticles = (sort_by, order) => {
    getAllArticles(undefined, sort_by, order)
      .then(articles => {
        this.setState({ allArticles: articles, isLoading: false });
      })
      .catch(error => {
        const { status, statusText } = error.response;
        this.setState({ error: { status, statusText }, isLoading: false });
      });
  };

  render() {
    const { isLoading, allArticles, error } = this.state;
    if (error) return <Error error={error} />;
    if (isLoading) return <Spinner />;
    return (
      <div class="container">
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
              <div>
                <Link
                  to={`/articles/${article_id}`}
                  article_id={article_id}
                >
                  <li key={article_id}>{title}</li>
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

export default AllArticles;
