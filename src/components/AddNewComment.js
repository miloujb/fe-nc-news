import React, { Component } from "react";
import { postComment } from "./api";

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
    const { username, article_id } = this.props;
    const { newComment } = this.state;
    postComment({ article_id, body: newComment, username }).then(
      newAddedComment => {
        this.props.AddComment(newComment);
        this.setState({ comment: "" });
      }
    );
  };
}

export default AddNewComment;
