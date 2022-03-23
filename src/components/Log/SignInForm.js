import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { isLoggedAtom } from "../../stores/user";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          //remove utiliser 2 state
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
          return;
        }
        setIsLogged(true);
        Cookies.set("jwt", res.data.jwt);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
        focus:outline-none focus:border-sky-500 
        focus:ring-sky-500 
        block rounded-md sm:text-sm focus:ring-1"
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
        focus:outline-none focus:border-sky-500 
        focus:ring-sky-500 
        block rounded-md sm:text-sm focus:ring-1"
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <button
        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
      focus:outline-none focus:border-sky-500 
      focus:ring-sky-500 
      block rounded-md sm:text-sm focus:ring-1"
      >
        <input type="submit" value="Se connecter" />
      </button>
    </form>
  );
};

export default SignInForm;
