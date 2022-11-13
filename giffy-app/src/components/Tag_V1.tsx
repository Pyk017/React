import { useState } from "react";
import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchData } = useGif(tag);

  const handleClick = () => {
    fetchData(tag);
  };

  return (
    <div>
      <h1 className="neumorphic">Random {tag} Gif</h1>
      <img src={gif} alt="random gif" className="neumorphic" />
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.currentTarget.value)}
        className="neumorphic"
      />
      <button onClick={handleClick}>CLICK FOR NEW </button>
    </div>
  );
};

export default Tag;
