import React, { Component } from "react";

class Sorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { fetchAllArticles } = this.props;
    const { sort_by, order } = this.state;
    console.log(sort_by, order);
    event.preventDefault();
    fetchAllArticles(sort_by, order);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select name="sort_by" onChange={this.handleChange}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select name="order" onChange={this.handleChange}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button>Sort!</button>
        </form>
      </div>
    );
  }
}

export default Sorter;
