import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
    </div>
  );
};

export default HomePage;
