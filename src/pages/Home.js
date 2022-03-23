import React, { useContext } from "react";
import Thread from "../components/Thread";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import NewPostForm from "../components/Post/NewPostForm";
import AddPost from "../components/AddPost/AddPost";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div className="container p-20 ">
      <Thread />
    </div>
  );
};

export default Home;
