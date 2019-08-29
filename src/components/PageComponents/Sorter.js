import React, { Component } from "react";

class Sorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };

  render() {
    const { sort_by, order } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={sort_by} onChange={this.handleSortChange}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select value={order} onChange={this.handleOrderChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button>Sort!</button>
        </form>
      </div>
    );
  }
  handleSortChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleOrderChange = event => {
    this.setState({ order: event.target.value });
  };

  handleSubmit = event => {
    const { fetchAllArticles } = this.props;
    event.preventDefault();
    const { sort_by, order } = this.state;
    console.log(this.state);
    fetchAllArticles(sort_by, order);
  };
}

export default Sorter;
