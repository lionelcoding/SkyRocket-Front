import React, { useEffect, useState } from "react";

const Card = ({ post }) => {
  console.log(post)
  return (
    <div class="container px-4 py-5" id="custom-cards" key={post._id}>
      <h2 class="pb-2 border-bottom">{}</h2>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            // style="background-image: url('unsplash-photo-1.jpg')"
          >
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {post.message}
              </h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <small>{post.likers.length}</small>
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use href="#geo-fill"></use>
                  </svg>
                  <small>Earth</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use href="#calendar3"></use>
                  </svg>
                  <small>{post.createdAt}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
