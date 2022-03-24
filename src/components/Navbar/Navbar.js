import { useAtomValue } from "jotai";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isLoggedAtom } from "../../stores/user";
import { UidContext } from "../AppContext";
import Logout from "../Log/Logout";


const Navbar = () => {
  const isLogged = useAtomValue(isLoggedAtom);
  console.log("coucou from nav", isLogged);
  // const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <div id="container-header" className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <NavLink
          exact
          to="/"
          class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
        <img src="./img/rocket.svg" alt="icon" />
        </NavLink>

        {isLogged ? (
          <>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <NavLink exact to="/profil">
                <li class="nav-link px-2 link-secondary">
                  Bienvenue {userData.pseudo}{" "}
                </li>
              </NavLink>
              <NavLink exact to="/">
                <li class="nav-link px-2 link-secondary">Home</li>
              </NavLink>
              <NavLink exact to="/team">
                <li class="nav-link px-2 link-dark">Team</li>
              </NavLink>
              <NavLink exact to="/create">
                <li class="nav-link px-2 link-dark">Create Project</li>
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
