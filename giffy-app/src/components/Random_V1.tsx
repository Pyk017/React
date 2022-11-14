import useGif from "../useGif";
import RandomSkeleton from "./Skeleton/RandomSkeleton";

const Random = () => {
  const { gif, isLoading, fetchData } = useGif(null);

  const handleClick = () => {
    if (fetchData) fetchData(null);
  };

  return (
    <>
      {isLoading && <RandomSkeleton />}

      {!isLoading && (
        <div>
          <h1 className="neumorphic">Random Gif</h1>
          <img src={gif} alt="random gif" className="neumorphic" />
          <button onClick={handleClick}>CLICK FOR NEW </button>
        </div>
      )}
    </>
  );
};

export default Random;
