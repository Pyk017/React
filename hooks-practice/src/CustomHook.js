import useLocalStorage from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

const CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "");

  const navigate = useNavigate();

  return (
    <div className="custom-hook" style={{ textAlign: "center" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter text..."
      />
      <div className="backLink" onClick={() => navigate("/")}>
        Back to homepage
      </div>
    </div>
  );
};

export default CustomHook;
