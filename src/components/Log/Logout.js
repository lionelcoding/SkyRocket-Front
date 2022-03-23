import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { isLoggedAtom } from "../../stores/user";
import { useSetAtom } from "jotai";

const Logout = () => {
  const setIsLogged = useSetAtom(isLoggedAtom);
  const navigate = useNavigate();

  const logoutFunc = () => {
    setIsLogged(false);
    cookie.remove("jwt", { expires: 1 });
    navigate("/", { replace: true });
  };

  return (
    <button onClick={logoutFunc} type="button" class="btn btn-outline-danger">
      Logout
    </button>
  );
};

export default Logout;
