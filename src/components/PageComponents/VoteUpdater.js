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
            onClick={this.handleClick}
            value={1}
            disabled={voteChanger === 1}
          >
            Upvote
          </button>
          <button
            onClick={this.handleClick}
            value={-1}
            disabled={voteChanger === -1}
          >
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
    console.log(article_id);
    // article_id not console.logging - is this why we're getting the error message?
    this.setState(({ voteChanger }) => {
      return {
        voteChanger: voteChanger + +value
      };
    });
    patchVotes(value, article_id);
  };
}

export default VoteUpdater;
