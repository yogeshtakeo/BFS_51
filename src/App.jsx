import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [parentCount, setParentCount] = useState(0);
  let variable = "Hello this is the variable";

  return (
    <div style={{ color: "blue", backgroundColor: "#22bb22" }}>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Click Me {parentCount}
      </button>
      <br />
      <ComponentPrinting i={1} varibale={variable} />
      <ComponentPrinting
        i={3}
        varibale={"This this is the variable different number:  "}
      />
    </div>
  );
}

function ComponentPrinting(props) {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      <a>Variable number {props.i}</a>
      <p>
        {props.varibale} {props.i}
      </p>
      <p>Count for this varibale : {count}</p>
    </div>
  );
}

export default App;
