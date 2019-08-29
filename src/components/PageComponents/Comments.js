import React, { Component } from "react";
import { getComments, postComment, deleteComment } from "../API/api";
import DeleteComment from "./DeleteComment";
// import VoteUpdater from "./VoteUpdater";

class Comments extends Component {
  state = {
    articleComments: [],
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

  removeComment = comment_id => {
    deleteComment(comment_id).then(comment => {
      this.setState(prevState => {
        return {
          comments: [...prevState.comments]
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
              {/* <VoteUpdater comment_id={comment_id} votes={votes} /> */}
              <DeleteComment
                comments={articleComments}
                article_id={this.props.article_id}
                username={this.props.username}
                comment_id={comment_id}
              />
            </div>
          );
        })}
        )}
      </div>
    );
  }
}

export default Comments;
