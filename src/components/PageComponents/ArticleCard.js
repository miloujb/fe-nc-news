import React, { Component } from "react";
import { getArticleCard } from "../API/api";
import { Link } from "@reach/router";
import AddNewComment from "./AddNewComment";
import VoteUpdater from "./VoteUpdater";
import Comments from "./Comments";
import Error from "../OtherComponents/Error";
import Spinner from "../OtherComponents/Spinner";

class ArticleCard extends Component {
  state = {
    singleArticle: null,
    isLoading: true,
    error: null,
    username: "jessjelly"
  };

  componentDidMount = () => {
    this.fetchArticleCard();
  };

  fetchArticleCard = () => {
    getArticleCard(this.props.article_id)
      .then(article => {
        this.setState({ singleArticle: article, isLoading: false });
      })
      .catch(error => {
        const { status, statusText } = error.response;
        this.setState({ error: { status, statusText }, isLoading: false });
      });
  };

  render() {
    const article_id = this.props.article_id;
    const { singleArticle, isLoading, error } = this.state;
    if (error) return <Error error={error} />;
    if (isLoading) return <Spinner />;
    return (
      <div class="container">
        <h2>{singleArticle.title}</h2>
        <Link to={`/users/${singleArticle.author}`}>
          <h3>Author: {singleArticle.author}</h3>
        </Link>
        <p>{singleArticle.body}</p>
        <p>
          Published: {new Date(singleArticle.created_at).toLocaleString()} in{" "}
          {singleArticle.topic}
        </p>
        {/* <p>Votes: {singleArticle.votes}</p> */}
        <p>{singleArticle.comment_count} Comments</p>
        <VoteUpdater article_id={article_id} votes={singleArticle.votes} />
        <AddNewComment
          article_id={this.props.article_id}
          username={this.props.username}
        />
        <Comments article_id={article_id} />
      </div>
    );
  }
}

export default ArticleCard;
