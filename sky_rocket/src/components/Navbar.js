import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);

  return (
    <nav>
      <div>
        <div>
          <NavLink exact to="/">
            <div>
              <h3>Sky rocket</h3>
            </div>
          </NavLink>
        </div>

        {uid ? (
          <ul>
            <li>
              <NavLink exact to="/profil">
                <div>Profil</div>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <h3> Profil non-connecté</h3>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
