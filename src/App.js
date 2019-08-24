import React from "react";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
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
        </Router>
      </div>
    );
  }
}

export default App;
