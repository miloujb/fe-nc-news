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
    getUser(this.props.username).then(username => {
      this.setState({ user: username, isLoading: false });
    });
  };

  render() {
    const { user, isLoading } = this.state;
    console.log(this.state);
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h2>{user.username}'s Profile</h2>
        <img src={user.avatar_url} alt={user.username} />
        <h3>Name: {user.name}</h3>
      </div>
    );
  }
}

export default User;
