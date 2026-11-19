import { useState } from 'react';

const FRUITS = ['Apple', 'Apricot', 'Banana', 'Cherry', 'Grape', 'Mango', 'Melon'];

// Parent owns the state
export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = FRUITS.filter(f => f.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      {/* Child 1 triggers updates via callback */}
      <SearchBar onSearch={setQuery} />
      {/* Child 2 reads state via props */}
      <ResultList query={query} results={results} />
    </>
  );
}

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  return <input value={input} placeholder="Search fruit" onChange={e => {
    setInput(e.target.value);
    onSearch(e.target.value);
  }} />;
}

function ResultList({ query, results }) {
  return (
    <div>
      <p>{results.length} result(s) for "{query}"</p>
      <ul>{results.map(r => <li key={r}>{r}</li>)}</ul>
    </div>
  );
}
