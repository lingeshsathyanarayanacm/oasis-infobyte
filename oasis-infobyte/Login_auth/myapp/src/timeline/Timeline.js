import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Lingesh",
      postImage:
        "https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "UnKnown",
      postImage:
        "https://cdn.pixabay.com/photo/2024/03/09/06/52/flowers-8622033_1280.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "MadBrothers",
      postImage:
        "https://cdn.pixabay.com/photo/2023/08/20/08/30/luis-i-bridge-8201941_1280.jpg",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "terial",
      postImage:
        "https://cdn.pixabay.com/photo/2024/02/22/15/18/clouds-8590310_1280.jpg",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
