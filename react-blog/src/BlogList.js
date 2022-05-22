const BlogList = ({ blogs, title, handleDeleteBlog }) => {
  return (
    <div className="blog-list">
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <button onClick={() => handleDeleteBlog(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
