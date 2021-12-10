import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/Home">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-input">
              <input
                type="text"
                class="form-control"
                placeholder="Ingrese la pelicula"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
