import React, { useEffect, useState } from "react";

const Card = ({ post }) => {
  //   render() {
  //     const myStyle={
  // backgroundImage:`url(${process.env.PUBLIC_URL+ "/image.png"})`

  //         };

  return (
    <div class="card">
      <img
        class="card-img-top"
        src="https://source.unsplash.com/1600x900/?startup,meeting"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
          <small>{post.createdAt}</small>
          <small>{post.message}</small>
          <small>{post.likers.length}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
