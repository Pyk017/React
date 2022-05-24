// javascript for create.html

const form = document.querySelector("form");
const backBtn = document.querySelector(".back");

const createPost = async (e) => {
  e.preventDefault();

  const newPost = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });

  window.location.replace("./index.html");
};

backBtn.addEventListener("click", () => {
  window.location.replace("/");
});

form.addEventListener("submit", createPost);
