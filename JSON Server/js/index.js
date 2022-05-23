// javascript for index.html
const container = document.querySelector(".blogs");
const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  //? _sort in URL is used to sort the data based on key and _order is for descending / ascending(by default) order.
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  //? if search input is filled then &q is used to find that term in database.json
  if (term) {
    uri += `&q=${term}`;
  }

  const response = await fetch(uri);

  const posts = await response.json();

  console.log("posts :>> ", posts);

  let template = "";

  posts.forEach((post) => {
    template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} Likes</small></p>
                <p>${post.body.slice(0, 200) + "..."}</p>
                <a href="./details.html?id=${post.id}">Read More...</a>
            </div>
        `;
  });

  container.innerHTML = template;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
