import React, { Component } from "react";
import { getAllTopics } from "./api";

class AllTopics extends Component {
  state = {
    isLoading: true,
    allTopics: null
  };

  componentDidMount = () => {
    this.fetchAllTopics();
  };

  fetchAllTopics = () => {
    getAllTopics().then(topics => {
      this.setState({ allTopics: topics, isLoading: false });
    });
  };

  render() {
    const { isLoading, allTopics } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <ul>
          {allTopics.map(topic => {
            const { slug, description } = topic;
            return <li key={description}>{slug}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default AllTopics;
