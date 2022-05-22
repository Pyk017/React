import React, { useState } from "react";

const Home = () => {
  const NAME = "Prakhar";
  const AGE = 23;

  const [name, setName] = useState(NAME);
  const [age, setAge] = useState(AGE);

  const handleClick = () => {
    setName("Yush");
    setAge(45);
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
