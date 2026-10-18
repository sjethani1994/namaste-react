import React, { Component } from "react";
import "../styles/About.css";

export default class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      error: null,
    };
    console.log('Constructor called.')
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      console.log('Component Did Mount')
      const json = await response.json();

      this.setState({
        users: json,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }

  componentDidUpdate() {
    console.log('Component did update.')
  }

  componentWillUnmount() {
    console.log("Component unmounted.")
  }
  render() {
    const { users, loading, error } = this.state;

    console.log('Component Did Render.')
    if (loading) {
      return <h2 className="loading-text">Loading users...</h2>;
    }

    if (error) {
      return <h2 className="error-text">{error}</h2>;
    }

    return (
      <div className="users-page">
        <div className="users-header">
          <h1>GitHub Community</h1>
          <p>Discover developers from around the world.</p>
        </div>

        <div className="users-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-card-top">
                <img
                  className="user-avatar"
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                />

                <span className="github-badge">GitHub User</span>
              </div>

              <div className="user-card-body">
                <h2>{user.login}</h2>
                <p className="user-description">Developer profile on GitHub</p>

                <a
                  className="profile-btn"
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
