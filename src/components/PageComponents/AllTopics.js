import React, { Component } from "react";
import { getAllTopics } from "../API/api";
import { Link } from "@reach/router";
import Error from "../OtherComponents/Error";
import Spinner from "../OtherComponents/Spinner";

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
    const { isLoading, allTopics, error } = this.state;
    if (error) return <Error error={error} />;
    if (isLoading) return <Spinner />;
    return (
      <div class="flex-container">
        <ul>
          {allTopics.map(topic => {
            const { slug, description } = topic;
            return (
              <div class="topic">
                <Link to={`/topics/${slug}`} key={slug}>
                  <li key={description}>{slug}</li>
                </Link>
                <br />
                <p>{description}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllTopics;
