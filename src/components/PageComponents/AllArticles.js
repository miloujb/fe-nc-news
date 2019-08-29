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

  fetchAllArticles = () => {
    getAllArticles().then(articles => {
      this.setState({ allArticles: articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, allArticles } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <Sorter />
        <ul>
          {allArticles.map(article => {
            const { article_id, title } = article;
            return (
              <Link to={`/articles/${article_id}`} article_id={article_id}>
                <li key={article_id}>{title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllArticles;
