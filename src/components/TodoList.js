import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';
const TodoList = () => {

    const [todos, setTodos] = useContext(TodoContext);
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            {!todos.length && <>No todos to display.</>}
            <ol>
                {todos.map(todo => {
                    return (
                        <div key={todo.id} className='item'>
                            <li>{todo.text}</li>
                            <button onClick={() => deleteTodo(todo.id)}>x</button>
                        </div>);
                })}
            </ol>
        </div>
    )
}

export default TodoList
