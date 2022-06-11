import { useState, useMemo } from "react";

const ChangeTheme = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
    };
  }, [isDark]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setIsDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

function slowFunction(number) {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default ChangeTheme;
