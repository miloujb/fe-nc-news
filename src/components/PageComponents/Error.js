import React from "react";
import { Link } from "@reach/router";

const Error = props => {
  const { state } = props.location;
  if (state === null) {
    const { status, statusText } = props.error;
    console.log(props.error);
    return (
      <>
        <h3>Oh no...</h3>
        <p>
          Error: {status} {statusText}
        </p>
        <p>
          We've hit an error. Sorry about that. Please try again, or click{" "}
          <Link to="/">here</Link> to go back to the homepage
        </p>
      </>
    );
  }
};

export default Error;
