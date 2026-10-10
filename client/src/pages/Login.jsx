import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [mode, setMode] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      mode === "login"
        ? "Login will be connected to the backend later."
        : "Registration will be connected to the backend later."
    );
  };

  return (
    <section className="auth-page">

      <div className="auth-image">

        <div className="auth-overlay">

          <span className="logo-icon">✈</span>

          <h2>
            Travel more.
            <br />
            Worry less.
          </h2>

          <p>
            Your next adventure is only a booking away.
          </p>

        </div>

      </div>


      <div className="auth-form-wrapper">

        <div className="auth-form">

          <Link to="/" className="auth-back">
            ← Back to home
          </Link>

          <span className="eyebrow">
            {mode === "login" ? "WELCOME BACK" : "JOIN Travexa"}
          </span>

          <h1>
            {mode === "login"
              ? "Sign in to your account"
              : "Create your account"}
          </h1>

          <p className="auth-subtitle">
            {mode === "login"
              ? "Manage your trips and bookings in one place."
              : "Start planning your next journey today."}
          </p>

          <form onSubmit={handleSubmit}>

            {mode === "register" && (
              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>
            )}

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="you@example.com"
                required
              />

            </div>


            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                required
              />

            </div>


            {mode === "login" && (
              <div className="forgot-row">

                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#forgot">
                  Forgot password?
                </a>

              </div>
            )}


            <button
              className="auth-submit"
              type="submit"
            >
              {mode === "login"
                ? "Sign In →"
                : "Create Account →"}
            </button>

          </form>


          <div className="auth-switch">

            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() =>
                setMode(
                  mode === "login"
                    ? "register"
                    : "login"
                )
              }
            >
              {mode === "login"
                ? "Create one"
                : "Sign in"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;