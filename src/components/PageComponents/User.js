import React, { Component } from "react";
import { getUser } from "../API/api";
import Spinner from "../OtherComponents/Spinner";

class User extends Component {
  state = {
    user: null,
    isLoading: true
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { username } = this.props;
    getUser(username).then(username => {
      this.setState({ user: username, isLoading: false });
    });
  };

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <Spinner />;
    return (
      <div className="container">
        <h2>{user.username}'s Profile</h2>
        <h3>Name: {user.name}</h3>
        <img src={user.avatar_url} alt={user.username} />
      </div>
    );
  }
}

export default User;
