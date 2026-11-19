import { useState } from 'react';

// Code challenge solution: two state variables, count + history
export default function CounterWithHistory() {
  const [count, setCount]     = useState(0);
  const [history, setHistory] = useState([0]);

  function change(next) {
    setCount(next);
    setHistory(h => [...h, next].slice(-5)); // keep last 5 values
  }

  function undo() {
    if (history.length < 2) return;
    setCount(history[history.length - 2]);
    setHistory(h => h.slice(0, -1));
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => change(count + 1)}>+1</button>
      <button onClick={() => change(count - 1)}>-1</button>
      <button onClick={() => change(0)}>Reset</button>
      <button onClick={undo}>Undo</button>
      <p>History: [{history.join(', ')}]</p>
    </div>
  );
}
