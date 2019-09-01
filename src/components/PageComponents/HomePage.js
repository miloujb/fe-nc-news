import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div class="home-box">
      <h2>Welcome to NC News!</h2>
      <p>
        Why not have a look at the <Link to="/topics">topics</Link> we have on
        offer? Or the <Link to="/articles">articles</Link> we have in our
        collection?
      </p>
    </div>
  );
};

export default HomePage;
