import React , { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";

import Thread from "../components/Thread";
import AddPost from "../components/AddPost/AddPost";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div className="container p-20 ">
      {uid ? <AddPost /> : <Log signin={true} signup={false} />}
      <Thread />
    </div>
  );
};

export default Home;
