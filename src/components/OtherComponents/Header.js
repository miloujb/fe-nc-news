import React from "react";

function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        NC NEWS
      </a>
      <div id="navbarText">
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
          <li className="nav-item">
            <a className="nav-link" href="/users/jessjelly">
              Logged in as: jessjelly
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
