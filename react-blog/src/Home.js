import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const BLOGS = [
    {
      id: 1,
      author: "Brendon",
      title: "Tin",
      body: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    },
    {
      id: 2,
      author: "Gillie",
      title: "Stim",
      body: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    },
    {
      id: 3,
      author: "Elizabet",
      title: "Cardguard",
      body: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    },
    {
      id: 4,
      author: "Ortensia",
      title: "Zamit",
      body: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    },
    {
      id: 5,
      author: "Salaidh",
      title: "Mat Lam Tam",
      body: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    },
  ];

  const [blogs, setBlogs] = useState(BLOGS);

  const [name, setName] = useState("Prakhar's Blog");

  const handleDeleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  return (
    <div className="home">
      <h2>HomePage</h2>
      <BlogList
        blogs={blogs}
        title="All Blogs"
        handleDeleteBlog={handleDeleteBlog}
      />
      <button onClick={() => setName("Yush's Blog")}>
        Change your Blog Name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
