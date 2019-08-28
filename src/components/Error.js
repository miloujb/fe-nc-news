import React from "react";
import { Link } from "@reach/router";

const Error = () => {
  return (
    <div>
      <h1>Oh no...</h1>
      <h2>
        Looks like we can't get that page for you. Please click{" "}
        <Link to="/">here</Link> to go back to the homepage.{" "}
      </h2>
      <h3>
        Alternatively, stay here to look at a picture of a rabbit with a pancake
        on its head.
      </h3>
      <img
        src="https://i.kym-cdn.com/photos/images/masonry/000/411/080/c7b.jpg"
        alt="rabbit"
      />
    </div>
  );
};

export default Error;
