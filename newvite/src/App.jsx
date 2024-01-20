import React, { useState } from "react";

const App = () => {
  const [value, setvalue] = useState({
    task: "",
  });

  function HandleChange(event) {
    console.log(event.target.value);
    setvalue({
      ...value,
      [event.target.name] : event.target.value,
    });
  }
  return (
    <div>
      <h1>hello {value}</h1>
      <input name="task" type="text" onChange={HandleChange} />
      <button>click me</button>
    </div>
  );
};

export default App;
