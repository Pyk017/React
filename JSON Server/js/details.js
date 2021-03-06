const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".button");
const backBtn = document.querySelector(".back");

const renderDetails = async () => {
  const response = await fetch("http://localhost:3000/posts/" + id);

  const post = await response.json();

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;

  container.innerHTML = template;
};

deleteBtn.addEventListener("click", async (e) => {
  const response = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });

  window.location.replace("./index.html");
});

backBtn.addEventListener("click", () => {
  window.location.replace("/");
});

window.addEventListener("DOMContentLoaded", () => renderDetails());
