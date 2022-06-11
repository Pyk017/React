import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseRef = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const prevName = useRef("");
  const inputRef = useRef("");

  const navigate = useNavigate();

  //   console.log("above useeffect");

  useEffect(() => {
    renderCount.current += 1;
    prevName.current = name;
    // console.log("useeffect ran");
    // console.log("prevName :>> ", prevName);
    // console.log("name :>> ", name);
  }, [name]);

  //   console.log("prevName outside useeffect :>> ", prevName);
  //   console.log("name outside useeffect :>> ", name);

  const focus = () => {
    // console.log("inputRef :>> ", inputRef);
    inputRef.current.focus();
  };

  return (
    <div className="useref-container">
      <input
        ref={inputRef}
        type="text"
        className="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered times {renderCount.current}</div>
      <button onClick={focus}>focus</button>
      <div className="backLink" onClick={() => navigate("/")}>
        Back to homepage
      </div>
    </div>
  );
};

export default UseRef;
