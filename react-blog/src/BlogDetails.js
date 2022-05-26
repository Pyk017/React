import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const deleteBlog = () => {
    fetch("http://localhost:8000/blogs/" + id, { method: "DELETE" })
      .then(() => console.log("Blog deleted successfully"))
      .catch((err) => console.log("Error while deleting blog ", err));
    window.location.replace("/");
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
          <button className="deleteBtn" onClick={deleteBlog}>
            Delete
          </button>
          <button className="backBtn">
            <Link to="/">Back</Link>
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
