import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    // Define colors based on priority
    const getColor = (priority) => {
        switch (priority) {
            case 1:
                return '#ffcccc'; // High priority (Light Red)
            case 2:
                return '#ffffcc'; // Medium priority (Light Yellow)
            case 3:
            default:
                return '#ccffcc'; // Low priority (Light Green)
        }
    };

    return (
        <li style={{ backgroundColor: getColor(todo.priority), padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
            <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                onClick={() => toggleTodo(todo.id)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
        </li>
    );
};

export default TodoItem;


