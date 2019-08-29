import React, { Component } from "react";
import { patchVotes, patchCommentVotes } from "../API/api";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class VoteUpdater extends Component {
  state = {
    voteChanger: 0,
    article_id: this.props.article_id,
    comment_id: this.props.comment_id,
    votes: this.props.votes
  };

  render() {
    const { voteChanger, votes } = this.state;
    return (
      <div>
        <p>Votes: {votes + voteChanger}</p>
        <form>
          <button
            onClick={this.handleClick}
            value={1}
            disabled={voteChanger === 1}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            Upvote
          </button>
          <button
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
    const { article_id, comment_id } = this.state;
    this.setState(({ voteChanger }) => {
      return {
        voteChanger: voteChanger + +value
      };
    });
    if (article_id) patchVotes(value, article_id);
    else {
      patchCommentVotes(value, comment_id);
    }
  };
}

export default VoteUpdater;
