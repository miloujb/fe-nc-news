import React, { Component } from "react";
import { Link } from "@reach/router";
import { getComments, postComment, deleteComment } from "../API/api";
import DeleteComment from "./DeleteComment";
import VoteUpdater from "./VoteUpdater";
import Spinner from "../OtherComponents/Spinner";

class Comments extends Component {
  state = {
    articleComments: [],
    isLoading: true,
    username: "jessjelly"
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
    if (isLoading) return <Spinner />;
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
            <div key={comment_id} class="comment">
              <p>
                Written by <Link to="/users/:username"> {author}</Link>,{" "}
                {new Date(created_at).toLocaleString()}
              </p>
              <p>Comment ID: {comment_id}</p>
              <p>{body}</p>
              <p>
                Votes: {votes}
                <VoteUpdater comment_id={comment_id} votes={votes} />
              </p>
              <DeleteComment
                username={articleComment.author}
                comment_id={comment_id}
                loggedInUser={this.state.username}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
