import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="container p-20">
      <div className="py-10">
        {uid ? "Mon profil à compléter" : <Log signin={false} signup={true} />}
      </div>
    </div>
  );
};

export default Profil;
