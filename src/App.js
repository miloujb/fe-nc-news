import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import AllArticles from "./components/PageComponents/AllArticles";
import AllTopics from "./components/PageComponents/AllTopics";
import HomePage from "./components/PageComponents/HomePage";
import "./App.css";
import { Router } from "@reach/router";
import ArticleCard from "./components/PageComponents/ArticleCard";
import ArticlesByTopic from "./components/PageComponents/ArticlesByTopic";
import User from "./components/PageComponents/User";
import Error from "./components/PageComponents/Error";
// import DeleteComment from "./components/PageComponents/DeleteComment";

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
          <AllArticles path="/articles" />
          <AllTopics path="/topics" />
          <ArticlesByTopic path="/topics/:topic" />
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
