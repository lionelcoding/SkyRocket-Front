import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";



const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
text-gray-800'>
        <div className='md: flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <ul className='md: flex md: items-center'>
          <NavLink exact to="/">
              <h3>Sky rocket</h3>
          </NavLink>
          </ul>
        </div>

        {uid ? (
          <ul className='md: flex md: items-center'>
            <li>
              <NavLink exact to="/profil">
              <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            {/* <Logout /> */}
          </ul>
        ) : (
          <ul className='md: flex md: items-center'>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <h3> Profil non-connecté</h3>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      
    </div>
    
  );
          

};



export default Navbar;
