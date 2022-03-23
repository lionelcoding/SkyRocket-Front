import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";

const Card = ({ post }) => {
  const usersData = useSelector((state) => state.usersReducer);

  return (
    <div class="card">
      <img
        class="card-img-top"
        src="https://source.unsplash.com/1600x900/?startup,meeting"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">
          <ul>
            <li>{post.message}</li>
            <li class="mt-10">crée le {post.createdAt}</li>
            <li class="mt-5">Participants : {post.likers.length}</li>
            <li>
              posté par{" "}
              {!isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.pseudo;
                    else return null;
                  })
                  .join("")}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Card;
