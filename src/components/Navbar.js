import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">News</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse py-3" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item px-2">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>

      </div>
    </nav>


  );

}
export default NavBar
