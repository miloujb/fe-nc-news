import React, { Component } from "react";
import { patchVotes, patchCommentVotes } from "../API/api";

class VoteUpdater extends Component {
  state = {
    voteChanger: 0,
    article_id: this.props.article_id,
    comment_id: this.props.comment_id,
    votes: this.props.votes
  };

  render() {
    console.log(this.state);
    const { voteChanger, votes } = this.state;
    return (
      <div>
        <p>Votes: {votes + voteChanger}</p>
        <form>
          <button
            onClick={this.changeVotes}
            value={1}
            disabled={voteChanger === 1}
          >
            Upvote
          </button>
          <button
            onClick={this.changeVotes}
            value={-1}
            disabled={voteChanger === -1}
          >
            Downvote
          </button>
        </form>
      </div>
    );
  }
  changeVotes = event => {
    event.preventDefault();
    const { value } = event.target;
    const { article_id, comment_id } = this.state;
    if (article_id) {
      patchVotes(article_id, value);
      this.setState(currentState => {
        return {
          voteChanger: currentState.voteChanger + +value
        };
      });
    } else if (comment_id) {
      patchCommentVotes(comment_id, value);
      this.setState(currentState => {
        return {
          voteChanger: currentState.voteChanger + +value
        };
      });
    }
  };
}

export default VoteUpdater;
