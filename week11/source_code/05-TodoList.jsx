import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Add: spread existing + new item
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };
  // Remove: filter creates a new array
  const removeTodo = (id) => setTodos(prev => prev.filter(t => t.id !== id));
  // Toggle: map creates a new array
  const toggleTodo = (id) =>
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <span onClick={() => toggleTodo(t.id)}
                  style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
              {t.text}
            </span>
            <button onClick={() => removeTodo(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
