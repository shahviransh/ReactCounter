// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { React, useState } from "react";
import "./App.css";

export default function App() {
  const [input, setCounter] = useState(0);
  let count = 5;

  const set = (plusMinus) => {
    if (plusMinus === '+'){
      setCounter(input + count)
    }
    else {
      setCounter(input - count)
    }
  };

  return (
    <div class="wrapper vcenter">
      <div class="box">
        <div className="counter">
          <h2 className="name">Hello I'm Viransh</h2>
          <div className="btnCon">
            <button className="button minus" onClick={()=>set('-')}>
              -
            </button>
            <div className="rect">
              <span className="input">{input}</span>
            </div>
            <button className="button plus" onClick={()=>set('+')}>
              +
            </button>
          </div>
          <h2 className="counterNum">Current Counter: {count}</h2>
        </div>
      </div>
    </div>
  );
}