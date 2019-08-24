import React, { Component } from "react";
import axios from "axios";
import { getAllArticles } from "./api";

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
        <ul>
          {allArticles.map(article => {
            const { article_id, title } = article;
            return <li key={article_id}>{title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default AllArticles;
