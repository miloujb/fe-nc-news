import React, { Component } from "react";
import { postComment } from "../API/api";

class AddNewComment extends Component {
  state = {
    newComment: ""
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Comment:
            <input
              type="textarea"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.props);
    const { username, article_id, comment_id, votes, created_at } = this.props;
    const { newComment } = this.state;
    // console.log(newComment);
    postComment({
      article_id,
      body: newComment,
      author: username,
      comment_id,
      created_at,
      votes
    }).then(newAddedComment => {
      this.props.AddComment(newComment);
      this.setState({ comment: "" });
    });
  };
}

export default AddNewComment;
