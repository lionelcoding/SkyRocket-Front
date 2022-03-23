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
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink
          exact
          to="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            class="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
        </NavLink>

        {uid ? (
          <>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <NavLink exact to="/profil" class="nav-link px-2 link-secondary">
                Bienvenue {userData.pseudo}
              </NavLink>
            </ul>
            <div class="col-md-3 text-end">
              <Logout class="btn btn-outline-primary me-2" />
            </div>
          </>
        ) : (
          <>
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <NavLink exact to="/profil">
                <h3> Profil non-connecté</h3>
              </NavLink>
            </ul>
          <div class="col-md-3 text-end">
          <button type="button" class="btn btn-outline-primary me-2">Login</button>
          <button type="button" class="btn btn-primary">Sign-up</button>
          </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
