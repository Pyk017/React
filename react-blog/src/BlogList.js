import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDeleteBlog }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

/* <button onClick={() => handleDeleteBlog(blog.id)}>Delete Blog</button> */
