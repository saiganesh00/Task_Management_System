import React from "react";
import { Link } from "react-router-dom"; // If you want to use React Router for navigation

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            TaskMaster
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">TaskMaster - Manage Your Tasks Efficiently</h1>
          <p className="lead">A simple and effective way to organize your tasks and stay productive.</p>
          <Link to="/login" className="btn btn-light btn-lg mt-3">
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Task Creation</h5>
                  <p className="card-text">
                    Easily create tasks with a simple and intuitive interface. Keep track of your progress in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Task Prioritization</h5>
                  <p className="card-text">
                    Set priorities for your tasks, ensuring that the most important ones get done first.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Notifications</h5>
                  <p className="card-text">
                    Get notified when deadlines are approaching or when tasks are due, keeping you on track.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="display-4">Start Organizing Your Tasks Today</h2>
          <p className="lead">Sign up now to experience a more organized and productive day!</p>
          <Link to="/register" className="btn btn-light btn-lg">
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <p>&copy; 2024 TaskMaster. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
