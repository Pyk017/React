import useGif from "../useGif";

const Random = () => {
  const { gif, fetchData } = useGif(null);

  const handleClick = () => {
    fetchData(null);
  };

  return (
    <div>
      <h1 className="neumorphic">Random Gif</h1>
      <img src={gif} alt="random gif" className="neumorphic" />
      <button onClick={handleClick}>CLICK FOR NEW </button>
    </div>
  );
};

export default Random;
