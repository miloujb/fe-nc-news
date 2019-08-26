import React from "react";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
import AllTopics from "./components/AllTopics";
import HomePage from "./components/HomePage";
import "./App.css";
import { Router } from "@reach/router";
import ArticleCard from "./components/ArticleCard";
import ArticlesByTopic from "./components/ArticlesByTopic";

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
          <ArticleCard path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
