import React, { Component } from "react";
import { getAllTopics } from "../API/api";
import { Link } from "@reach/router";

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
      <div class="container">
        <ul>
          {allTopics.map(topic => {
            const { slug, description } = topic;
            return (
              <Link to={`/topics/${slug}`} key={slug}>
                <li key={description}>{slug}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllTopics;
