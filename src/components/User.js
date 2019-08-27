import React, { Component } from "react";
import { getUser } from "./api";

class User extends Component {
  state = {
    user: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    getUser(username).then(username => {
      this.setState({ user: username, isLoading: false });
    });
  };

  render() {
    return <div></div>;
  }
}

export default User;
