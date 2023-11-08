import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex myPosts={posts} />
    </div>
  );
}
