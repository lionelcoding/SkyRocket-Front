import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";
import UpdateProfil from "../components/Log/UpdateProfil";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="container p-20">
      <div className="py-10">
        {uid ? <UpdateProfil /> : <Log signin={false} signup={true} />}
      </div>
    </div>
  );
};

export default Profil;
