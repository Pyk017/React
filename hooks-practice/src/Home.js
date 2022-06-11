import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header>Applications</header>
      <ul>
        <li onClick={() => navigate("/counter")}>Counter</li>
        <li onClick={() => navigate("/posts")}>Posts</li>
        <li onClick={() => navigate("/changetheme")}>Change Theme</li>
      </ul>
    </div>
  );
};

export default Home;
