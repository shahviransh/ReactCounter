import { React, useState } from "react";
import "./App.css";

export default function App() {
  const [input, setCounter] = useState(0);
  let count = 5;

  const set = (plusMinus) => {
    if (plusMinus === "+") {
      setCounter(input + count);
    } else if (plusMinus === "-") {
      setCounter(input - count);
    }
  };

  return (
    <div class="wrapper vcenter">
      <div class="box">
        <div className="counter">
          <h2 className="name">Hello I'm Viransh</h2>
          <div className="btnCon">
            <button className="button minus" onClick={() => set("-")}>
              -
            </button>
            <div className="rect">
              <span className="input">{input}</span>
            </div>
            <button className="button plus" onClick={() => set("+")}>
              +
            </button>
          </div>
          <h2 className="counterNum">Current Counter: {count}</h2>
        </div>
      </div>
    </div>
  );
}
