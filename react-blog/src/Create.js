import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogObject = {
      title,
      body,
      likes: 0,
    };

    setIsPending(true);
    // console.log(blogObject);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObject),
    })
      .then(() => {
        console.log("New Blog added");
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
      });
  };

  return (
    <div className="create-blog">
      <h2>Add a new Blog!</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title :- </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label> Blog Body :- </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="30"
          rows="10"
          required
        />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
