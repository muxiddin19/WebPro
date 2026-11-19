import { useState } from 'react';

// useState + functional updates
export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset     = () => setCount(0);

  // Stale: all three calls read the same old count
  const addThreeStale = () => {
    setCount(count + 1); setCount(count + 1); setCount(count + 1);
  };
  // Safe: each call gets the latest value
  const addThreeSafe = () => {
    setCount(p => p + 1); setCount(p => p + 1); setCount(p => p + 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <p>
        <button onClick={addThreeStale}>+3 (stale)</button>
        <button onClick={addThreeSafe}>+3 (functional)</button>
      </p>
    </div>
  );
}
