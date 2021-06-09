/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.lengs) {
    return <p className="text-center">Постов пока нет :(</p>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};
