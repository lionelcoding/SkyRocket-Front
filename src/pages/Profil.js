import React from "react";
import Log from "../components/Log";

const Profil = () => {

  return (
        <div className="container p-20">
          <div className="py-10"> 
          <Log signin={false} signup={true} />
          </div>
        </div>
  );
};

export default Profil;