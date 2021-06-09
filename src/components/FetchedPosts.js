/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.lengs) {
    return <button className="btn btn-primary">Загрузить</button>;
  }
  return posts.map((post) => <Post post={Post} key={post} />);
};
