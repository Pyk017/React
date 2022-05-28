import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const [isPendingDeletion, setIsPending] = useState(false);

  const deleteBlog = () => {
    setIsPending(true);

    fetch("http://localhost:8000/blogs/" + id, { method: "DELETE" })
      .then(() => {
        console.log("Blog Deleted Successfully!");
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => console.log("Error while deleting blog ", err));
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>Something went wrong from the server....</div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <small>{blog.likes} Likes</small>
          <p>{blog.body}</p>
          {!isPendingDeletion && (
            <>
              <button className="deleteBtn" onClick={deleteBlog}>
                Delete
              </button>
              <button className="backBtn" onClick={() => navigate("/")}>
                Back
              </button>
            </>
          )}

          {isPendingDeletion && (
            <>
              <button className="deleteBtn" disabled>
                Deleting Blog ...
              </button>
              <button className="backBtn" disabled>
                Back
              </button>
            </>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
