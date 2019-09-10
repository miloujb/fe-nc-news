import React, { Component } from "react";
import { patchVotes, patchCommentVotes } from "../API/api";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class VoteUpdater extends Component {
  state = {
    voteChanger: 0,
    article_id: this.props.article_id,
    votes: this.props.votes
  };

  render() {
    const { voteChanger, votes } = this.state;
    return (
      <div>
        <p>Votes: {votes + voteChanger}</p>
        <form>
          <button
            class="thumbsup"
            onClick={this.handleClick}
            value={1}
            disabled={voteChanger === 1}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            Upvote
          </button>
          <button
            class="thumbsdown"
            onClick={this.handleClick}
            value={-1}
            disabled={voteChanger === -1}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
            Downvote
          </button>
        </form>
      </div>
    );
  }
  handleClick = event => {
    event.preventDefault();
    const { value } = event.target;
    const { article_id } = this.state;
    const { comment_id } = this.props;
    console.log(comment_id);
    this.setState(({ voteChanger }) => {
      return {
        voteChanger: voteChanger + +value
      };
    });
    if (article_id) patchVotes(value, article_id);
    else if (comment_id) {
      patchCommentVotes(value, comment_id);
    }
  };
}

export default VoteUpdater;
