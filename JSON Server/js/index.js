//! javascript for index.html
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
                <div class="likes-section">
                  <div class="likes"><div class="icon unclicked" data-title="${
                    post.title
                  }" data-body="${post.body}" data-like="${
      post.likes
    }" data-dislike="${post.dislikes}"></div><b>${post.likes} Likes</b></div>

                  <div class="dislikes"><div class="icon unclicked" data-title="${
                    post.title
                  }" data-body="${post.body}" data-like="${
      post.likes
    }" data-dislike="${post.dislikes}" ></div><b>${
      post.dislikes
    } Dislikes</b></div>
                </div>
            </div>
        `;
  });

  container.innerHTML = template;

  const likeBtn = document.querySelectorAll(".likes .icon");
  const dislikeBtn = document.querySelectorAll(".dislikes .icon");

  const toggleButton = (e) => {
    if (e.target.classList.contains("unclicked")) {
      e.target.classList.remove("unclicked");
      e.target.classList.add("clicked");
    } else {
      e.target.classList.remove("clicked");
      e.target.classList.add("unclicked");
    }
  };

  const refreshData = async (e) => {
    const newPost = {
      title: e.target.dataset.title,
      body: e.target.dataset.body,
      likes: parseInt(e.target.dataset.like) + 1,
      dislikes: parseInt(e.target.dataset.dislike) + 1,
    };

    await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    });
  };

  const toggleRefresh = (event) => {
    toggleButton(event);
    refreshData(event);
  };

  likeBtn.forEach((like) => {
    like.addEventListener("click", (event) => toggleRefresh(event), {
      once: true,
    });
  });

  dislikeBtn.forEach((dislike) => {
    dislike.addEventListener("click", (event) => toggleRefresh(event), {
      once: true,
    });
  });
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
