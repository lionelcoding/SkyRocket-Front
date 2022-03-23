import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";

import Card from "./Card/Card";
import { isEmpty } from "./Utils";

const Thread = () => {

  const posts = useSelector((state) => state.postReducer);




  return (
    <div className="thread-container">
      <>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post._id}/>;
          })}
      </>
    </div>
  );
};

export default Thread;
