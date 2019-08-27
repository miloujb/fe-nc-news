import React, { Component } from "react";
import { getArticleCard } from "./api";
import { Link } from "@reach/router";

class ArticleCard extends Component {
  state = {
    singleArticle: null,
    isLoading: true
  };

  componentDidMount = () => {
    this.fetchArticleCard();
  };

  fetchArticleCard = () => {
    getArticleCard(this.props.article_id).then(article => {
      this.setState({ singleArticle: article, isLoading: false });
    });
  };

  render() {
    const { singleArticle, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h2>{singleArticle.title}</h2>
        <h3>Author: {singleArticle.author}</h3>
        <p>{singleArticle.body}</p>
        <p>
          Published: {new Date(singleArticle.created_at).toLocaleString()} in{" "}
          {singleArticle.topic}
        </p>
        <p>Votes: {singleArticle.votes}</p>
        <p>{singleArticle.comment_count} Comments</p>
        <Link to={`/articles/${singleArticle.article_id}/comments`}>
          Comments
        </Link>
      </div>
    );
  }
}

export default ArticleCard;
