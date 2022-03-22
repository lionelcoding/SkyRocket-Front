import React, { useEffect, useState } from "react";


const Card = ({ post }) => {


  return (
    <li className="card-container" key={post._id}>
      <p>Card {post._id} </p>
      <br/>
      {post.message}
    </li>
  );
};

export default Card;
