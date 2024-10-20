import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch initial todos
        axios.get('http://localhost:3001/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addTodo = (text, priority) => {
        axios.post('http://localhost:3001/todos', { text, priority })
            .then(response => {
                const newTodo = response.data;
                setTodos(prevTodos => [...prevTodos, newTodo].sort((a, b) => a.priority - b.priority));
            })
            .catch(error => console.error('Error adding todo:', error));
    };

    const toggleTodo = (id) => {
        const todo = todos.find(todo => todo.id === id);
        axios.put(`http://localhost:3001/todos/${id}`, { completed: !todo.completed })
            .then(() => {
                setTodos(todos.map(todo =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                ));
            })
            .catch(error => console.error('Error updating todo:', error));
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:3001/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error('Error deleting todo:', error));
    };

    return (
        <div>
            <h2>Hello! What would you like to do today?</h2>
            <AddTodo addTodo={addTodo} />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
