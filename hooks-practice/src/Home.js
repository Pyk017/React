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
        <li onClick={() => navigate("/useref")}>useRef Practice</li>
        <li onClick={() => navigate("/usecontext")}>useContext Practice</li>
        <li onClick={() => navigate("/customhook")}>Custom Hook</li>
      </ul>
    </div>
  );
};

export default Home;
