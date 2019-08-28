import React, { Component } from "react";
import { getComments, postComment } from "../API/api";

class Comments extends Component {
  state = {
    articleComments: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getComments(article_id).then(comments => {
      this.setState({ articleComments: comments, isLoading: false });
    });
  };

  addComment = () => {
    const { article_id, body } = this.props;
    const { username } = this.state;
    postComment({ body, article_id, username }).then(comment => {
      this.setState(prevState => {
        return {
          comments: [comment.data.comment, ...prevState.comments]
        };
      });
    });
  };

  render() {
    const { articleComments, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        {articleComments.map(articleComment => {
          const {
            comment_id,
            body,
            votes,
            author,
            created_at
          } = articleComment;
          return (
            <div key={comment_id}>
              <p>Comment ID: {comment_id}</p>
              <p>Written by {author}</p>
              <p>Published on: {new Date(created_at).toLocaleString()}</p>
              <p>{body}</p>
              <p>Votes: {votes}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
