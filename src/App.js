import React from "react";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
import AllTopics from "./components/AllTopics";
import HomePage from "./components/HomePage";
import "./App.css";
import { Router } from "@reach/router";
import ArticleCard from "./components/ArticleCard";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Comments from "./components/Comments";
import User from "./components/User";
import AddNewComment from "./components/AddNewComment";
import Error from "./components/Error";

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
          <Comments path="/articles/:article_id/comments" />
          <AddNewComment path="articles/:article_id/comments" />
          <User path="/users/:username" />
          <Error path="/error" />
        </Router>
      </div>
    );
  }
}

export default App;
