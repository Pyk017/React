import { useNavigate } from "react-router-dom";

const UseContext = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h2>Hello</h2>
      <div className="backLink" onClick={() => navigate("/")}>
        Back to homepage
      </div>
    </div>
  );
};

export default UseContext;
