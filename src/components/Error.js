import React from "react";
import { useRouteError } from "react-router-dom";


import { useRouteError, useNavigate } from "react-router-dom";
import "../styles/Error.css";

const Error = () => {
  const err = useRouteError();
  const navigate = useNavigate();

  const status = err?.status || 500;
  const message =
    err?.statusText ||
    err?.message ||
    "Something unexpected happened.";

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="error-icon">!</div>

        <p className="error-label">OOPS! SOMETHING WENT WRONG</p>

        <h1 className="error-code">{status}</h1>

        <h2 className="error-title">Page Not Found</h2>

        <p className="error-message">
          {message}
        </p>

        <button
          className="error-home-btn"
          onClick={() => navigate("/")}
        >
          ← Go Back Home
        </button>

        <p className="error-footer">
          Don't worry, let's get you back on track.
        </p>
      </div>
    </div>
  );
};

export default Error;

