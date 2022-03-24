import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (
    <div id="container-footer" class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          {/* <li class="nav-item">
            <NavLink exact to="/team" class="nav-link px-2 text-muted">
              Team
            </NavLink>
          </li> */}
        </ul>
        <p class="text-center text-muted">© 2022 SkyRocket, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
