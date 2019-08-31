import React from "react";
c

function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        NC NEWS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/topics/football">
              Football
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/topics/cooking">
              Cooking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/topics/coding">
              Coding
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/topics/">
              All Topics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/articles/">
              All Articles
            </a>
          </li>
        </ul>
        <span className="navbar-text">Logged in as: jessjelly</span>
      </div>
    </nav>
  );
}

export default Header;
