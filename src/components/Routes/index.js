import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Profil from "../../pages/Profil";
import Team from "../../pages/Team"
import CreateProject from "../../pages/CreateProject"
import Project from "../../pages/Project"

const index = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/project/:slug" element={< Project/>} />
          <Route path="/create" element={<CreateProject />} />
        </Routes>
    </div>
  );
};

export default index;