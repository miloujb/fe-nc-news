import React from "react";
import { Link } from "@reach/router";

function Header() {
  return (
    <div>
      <h1 className="Header">NC NEWS</h1>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
    </div>
  );
}

export default Header;
