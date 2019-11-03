import React, { useState, useContext } from 'react'
import { TodoContext } from '../TodoContext'
const TodoForm = () => {

    const [todoTitle, setTodoTitle] = useState('');
    const [todos, setTodos] = useContext(TodoContext);

    const addTodo = (e) => {
        e.preventDefault();
        if (todoTitle.trim()) {
            setTodos([
                ...todos,
                {
                    id: new Date().getTime(),
                    text: todoTitle
                }
            ]);
            setTodoTitle('');
        }
        else {
            window.alert('Enter a to-do')
        }

    }

    const handleTodoTextChange = (e) => {
        setTodoTitle(e.target.value);
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter a todo" value={todoTitle} onChange={handleTodoTextChange} />
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default TodoForm
