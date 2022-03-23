import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";
// import "../node_modules/bootstrap/dist/css/bootstrap/min.css"

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink
          exact
          to="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-bootstrap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
          </svg>
        </NavLink>

        {uid ? (
          <>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <NavLink exact to="/profil">
              <li class="nav-link px-2 link-secondary">Bienvenue {userData.pseudo} </li>
              </NavLink>
              <NavLink exact to="/">
              <li class="nav-link px-2 link-secondary">Home</li>
              </NavLink>
              <NavLink exact to="/team">
              <li class="nav-link px-2 link-dark">Team</li>
              </NavLink>
            </ul>
            <div class="col-md-3 text-end">
              <Logout />
            </div>
          </>
        ) : (
          <>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <NavLink exact to="/">
              <li class="nav-link px-2 link-secondary">Home</li>
              </NavLink>
              <NavLink exact to="/team">
              <li class="nav-link px-2 link-dark">Team</li>
              </NavLink>
            </ul>
            <div class="col-md-3 text-end">
            <NavLink exact to="/profil">
                <button type="button" class="btn btn-outline-primary me-2">
                  Login
                </button>
                <button type="button" class="btn btn-primary">
                  Sign-up
                </button>
              </NavLink>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
