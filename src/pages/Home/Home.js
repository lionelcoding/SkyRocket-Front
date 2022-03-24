import React, { useContext } from "react";
import Thread from "../../components/Thread/Thread";
import { UidContext } from "../../components/AppContext";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import "./Home.scss"
import Form from "../../components/Post/NewPostForm/NewPostForm"

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <div >
      <BackgroundVideo />
      <div className="ThreadHome">
        <Form/>
      <Thread />
      </div>
    </div>
  );
};

export default Home;
