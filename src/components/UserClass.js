import React, { Component } from "react";

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
      return <h2 className="px-5 py-10 text-center text-xl font-bold">Loading users...</h2>;
    }

    if (error) {
      return <h2 className="px-5 py-10 text-center text-xl font-bold text-red-600">{error}</h2>;
    }

    return (
      <div className="px-3 py-[25px] text-slate-800 sm:px-5 sm:py-[35px]">
        <div className="mb-[35px] text-center">
          <h1 className="mb-2.5 text-[26px] font-extrabold tracking-[-0.8px] text-slate-900 sm:text-[32px]">
            GitHub Community
          </h1>
          <p className="text-[15px] text-slate-500">
            Discover developers from around the world.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-6 min-[901px]:grid-cols-3">
          {users.map((user) => (
            <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white text-center shadow-[0_5px_18px_rgba(15,23,42,0.05)] transition duration-250 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]" key={user.id}>
              <div className="relative flex items-center justify-center border-b border-slate-200 bg-linear-135 from-[#eef2ff] to-slate-50 px-5 pt-[30px] pb-6">
                <img
                  className="size-[105px] rounded-full border-4 border-white object-cover shadow-[0_5px_14px_rgba(15,23,42,0.15)]"
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                />

                <span className="absolute top-3 right-3 rounded-full bg-white px-[9px] py-[5px] text-[10px] font-bold text-indigo-600">GitHub User</span>
              </div>

              <div className="p-[22px]">
                <h2 className="mb-2 text-xl font-bold wrap-anywhere text-slate-900">
                  {user.login}
                </h2>
                <p className="mb-[22px] text-[13px] leading-[1.6] text-slate-500">Developer profile on GitHub</p>

                <a
                  className="inline-block rounded-lg bg-indigo-600 px-[18px] py-2.5 text-[13px] font-semibold text-white transition hover:-translate-y-px hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-indigo-500"
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
