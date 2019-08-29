import React, { Component } from "react";
import { getAllTopics } from "../API/api";
import { Link } from "@reach/router";
import Error from "./Error";

class AllTopics extends Component {
  state = {
    isLoading: true,
    allTopics: null,
    error: null
  };

  componentDidMount = () => {
    this.fetchAllTopics();
  };

  fetchAllTopics = () => {
    getAllTopics().then(topics => {
      this.setState({ allTopics: topics, isLoading: false, error: null });
    });
  };

  render() {
    console.log(this.state);
    const { isLoading, allTopics, error } = this.state;
    if (error) return <Error />;
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
