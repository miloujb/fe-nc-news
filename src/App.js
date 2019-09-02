import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/OtherComponents/Header";
import AllTopics from "./components/PageComponents/AllTopics";
import HomePage from "./components/PageComponents/HomePage";
import "./App.css";
import { Router } from "@reach/router";
import ArticleCard from "./components/PageComponents/ArticleCard";
import Articles from "./components/PageComponents/Articles";
import User from "./components/PageComponents/User";
import Error from "./components/OtherComponents/Error";

class App extends React.Component {
  state = {
    username: "jessjelly"
  };
  render() {
    return (
      <div>
        <Header />
        <Router>
          <HomePage path="/" />
          <Articles path="/articles" />
          <AllTopics path="/topics" />
          <Articles path="/topics/:topic" />
          <ArticleCard
            path="/articles/:article_id"
            username={this.state.username}
          />
          <User path="/users/:username" />
          <Error
            path="/error"
            error={{ status: 404, statusText: "not found" }}
            default
          />
        </Router>
      </div>
    );
  }
}

export default App;
