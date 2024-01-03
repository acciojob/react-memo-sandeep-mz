import React, { useState, useEffect } from 'react';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoInput, setMemoInput] = useState('');
  const [memoItems, setMemoItems] = useState([]);

  useEffect(() => {
    // Update the document title with the count
    document.title = `Count: ${count}`;
  }, [count]);

  const handleAddTodo = () => {
    const newTodo = 'New todo';
    setTodos([...todos, newTodo]);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMemoInputChange = (e) => {
    setMemoInput(e.target.value);
  };

  const handleMemoSubmit = () => {
    if (memoInput.length > 5) {
      setMemoItems([...memoItems, memoInput]);
      setMemoInput('');
    } else {
      alert('Text should be greater than 5 characters.');
    }
  };

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={handleAddTodo}>Add Todo</button>
      <p>{todos.map((todo, index) => <span key={index}>{todo}</span>)}</p>

      <h2>Counter</h2>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>

      <h2>Memo</h2>
      <input type="text" value={memoInput} onChange={handleMemoInputChange} />
      <button onClick={handleMemoSubmit}>Submit</button>
      <ul>
        {memoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
