import React from "react";

function Posts({ posts, loading }) {
  console.log("from post", posts);

  if (loading) {
    <h2>Loading...........</h2>;
  }
  return (
    <div>
      <h1>post components</h1>
      <ul key={posts.id}>
        {posts.map((posts) => (
          <li>{posts.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
