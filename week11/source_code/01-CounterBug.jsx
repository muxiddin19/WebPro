// This does NOT work: a regular variable is not state
export default function CounterBug() {
  let count = 0; // resets to 0 on every render

  function handleClick() {
    count++; // local variable, React does not know
    document.getElementById('bug-log').textContent += count + ' ';
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+1</button>
      <p>console.log: <span id="bug-log"></span></p>
    </div>
  );
}
