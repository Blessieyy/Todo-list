import React, { useState } from 'react';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(3); // Default to low priority
  const [todos, setTodos] = useState([]); // Store the list of todos

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Add new todo to the list
    setTodos([...todos, { text, priority }]);

    // Reset form fields
    setText('');
    setPriority(3); // Reset to default
  };

  // Function to get color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 1:
        return 'red'; // High priority
      case 2:
        return 'yellow'; // Medium priority
      case 3:
        return 'green'; // Low priority
      default:
        return 'black'; // Default color
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <select value={priority} onChange={(e) => setPriority(Number(e.target.value))}>
          <option value={1}>High Priority</option>
          <option value={2}>Medium Priority</option>
          <option value={3}>Low Priority</option>
        </select>
        <button type="submit">Add</button>
      </form>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ color: getPriorityColor(todo.priority) }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
