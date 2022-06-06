import { useState, useEffect } from "react";

const Posts = () => {
  const [resourseType, setResourceType] = useState("posts");

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + resourseType)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((err) => console.log(err.message));
  }, [resourseType]);

  return (
    <div className="posts-container">
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <div className="data">
        <h2>{resourseType}</h2>
        {items.map((item) => {
          return <p key={item.id}>{JSON.stringify(item)}</p>;
        })}
      </div>
    </div>
  );
};

export default Posts;
