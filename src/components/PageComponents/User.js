import React, { Component } from "react";
import { getUser } from "../API/api";
import Spinner from "../OtherComponents/Spinner";
import Error from "../OtherComponents/Error";

class User extends Component {
  state = {
    user: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { username } = this.props;
    getUser(username)
      .then(username => {
        this.setState({ user: username, isLoading: false });
      })
      .catch(error => {
        const { status, statusText } = error.response;
        this.setState({ error: { status, statusText }, isLoading: false });
      });
  };

  render() {
    const { user, isLoading, error } = this.state;
    if (isLoading) return <Spinner />;
    if (error) return <Error error={error} />;
    return (
      <div className="container">
        <h2>{user.username}'s Profile</h2>
        <h3>Name: {user.name}</h3>
        <img src={user.avatar_url} alt={user.username} class="responsive" />
      </div>
    );
  }
}

export default User;
