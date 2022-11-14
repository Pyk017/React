import { useState } from "react";
import useGif from "../useGif";
import TagSkeleton from "./Skeleton/TagSkeleton";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const [header, setHeader] = useState("dogs");
  const { gif, isLoading, fetchData } = useGif(tag);

  const handleClick = () => {
    if (fetchData) {
      fetchData(tag);
      setHeader(tag);
    }
  };

  return (
    <>
      {isLoading && <TagSkeleton />}

      {!isLoading && (
        <div>
          <h1 className="neumorphic">Random {header} Gif</h1>
          <img src={gif} alt="random gif" className="neumorphic" />

          <input
            value={tag}
            onChange={(e) => setTag(e.currentTarget.value)}
            type="text"
            className="neumorphic"
          />

          <button onClick={handleClick}>CLICK FOR NEW </button>
        </div>
      )}
    </>
  );
};

export default Tag;
