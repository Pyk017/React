import { useState, useEffect } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();
      setArticles(data);
    }, 2000);
  });

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        Array(5)
          .fill(0)
          .map((n, idx) => <SkeletonArticle key={idx} theme="light" />)}
    </div>
  );
};

export default Articles;
