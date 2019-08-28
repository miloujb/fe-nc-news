import React, { Component } from "react";
import { patchVotes } from "../API/api";

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
    const { article_id } = this.state;
    if (article_id) {
      patchVotes(article_id, value);
      this.setState(currentState => {
        return {
          voteChanger: currentState.voteChanger + +value
        };
      });
    }
  };
}

export default VoteUpdater;
