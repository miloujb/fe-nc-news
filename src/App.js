import React from "react";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
import AllTopics from "./components/AllTopics";
import "./App.css";
import { Router } from "@reach/router";

class App extends React.Component {
  state = {
    username: "jessjelly"
  };
  render() {
    return (
      <div>
        <Header />
        <Router>
          <AllArticles path="/articles" />
          <AllTopics path="/topics" />
        </Router>
      </div>
    );
  }
}

export default App;
