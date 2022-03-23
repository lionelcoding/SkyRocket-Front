import React from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { isLoggedAtom } from "../../stores/user";
import { useSetAtom } from "jotai";

const Logout = () => {
  const setIsLogged = useSetAtom(isLoggedAtom);
  const navigate = useNavigate();
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };

  const logoutFunc = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        console.log("coucou from logout");
        setIsLogged(false);
        removeCookie("jwt");
      })
      .catch((err) => console.log("erreur from logout", err));
    navigate("/", { replace: true });
  };

  return (
    <>
      <button onClick={logoutFunc} type="button" class="btn btn-outline-danger">
        Logout
      </button>
    </>
  );
};

export default Logout;
