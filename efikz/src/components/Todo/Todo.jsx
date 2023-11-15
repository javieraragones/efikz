import './Todo.css'
import { useState, useEffect } from "react";
import { PlusCircle, PencilSimple, TrashSimple, CheckCircle, Circle, XCircle } from '@phosphor-icons/react';

export const TodoBox = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState('');
    const [editedTodo, setEditedTodo] = useState('');
    const [editedText, setEditedText] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!todo || todo === '') return
        // Crear una nueva tarea con un objeto
        const newTodo = {
            id: new Date().getTime(),
            todoText: todo,
            isCompleted: false,
        };

        // Actualizar el estado de todos añadiendo la nueva tarea al arreglo existente
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        // Limpiar el campo de entrada
        setTodo('');
    }

    const deleteTodo = (id) => {
        const newTodos = prevTodos => (
            prevTodos.filter(todo => todo.id !== id)
        )
        setTodos(newTodos);
    }

    const editTodo = (e, id) => {
        e.preventDefault();
        const newTodos = [...todos].map(todo => {
            if (id === todo.id) {
                todo.todoText = editedText;
            }
            return todo;
        });
        setTodos(newTodos);
        setEditedTodo(null);
    }

    const toggleTodoState = id => {
        const newTodos = [...todos].map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    }

    /*
    useEffect(() => {
        console.log(todos);
    }, [todos]);
*/
    const setInputFocus = input => {
        if (input !== null) {
            input.focus();
        }
    }
    //useEffect para obtener la lista de tareas
    useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
            setTodos(loadedTodos);
        }
    }, []);
    //useEffect para guardar/actualizar la lista de tareas
    useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);

    const capitaliceFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div className="todo-box content-box">
            <div className='box-title-row'>
                <h2 className='todo-title category-title'>Tareas</h2>
            </div>
            <div className='todos-container box-content-row'>

                <div className='todo-list content-list'>

                    {/* TODOS ELEMENTS */}
                    {/*console.log("Tareas->", todos)*/}
                    {
                        todos.length > 0
                            ? todos.map(todo => (
                                <div
                                    className={"todo-item " + (todo.isCompleted === true && "completed")}
                                    key={todo.id}>
                                    {
                                        todo.id === editedTodo
                                            ?
                                            <div className="todo-wrapper edit-todo-wrapper">
                                                <div className="todo-controls check-controls">
                                                    {
                                                        todo.isCompleted === true ? (
                                                            <CheckCircle
                                                                onClick={() => toggleTodoState(todo.id)}
                                                            />
                                                        )
                                                            : (
                                                                <Circle
                                                                    onClick={() => toggleTodoState(todo.id)}
                                                                />
                                                            )
                                                    }
                                                </div>
                                                <form
                                                    className='edit-todo-form'
                                                    onSubmit={(e) => editTodo(e, todo.id)}
                                                >
                                                    <input
                                                        type="text"
                                                        id="edit-input"
                                                        onChange={e => setEditedText(e.target.value)}
                                                        defaultValue={capitaliceFirstLetter(todo.todoText)}
                                                        ref={setInputFocus}
                                                    />
                                                </form>
                                                <div
                                                    className="todo-controls btn-cancel"
                                                    onClick={() => setEditedTodo('')}
                                                >
                                                    <XCircle className='cancel-edit-icon todo-icon' />
                                                </div>
                                            </div>

                                            :
                                            <div className="todo-wrapper">
                                                <div className='todo-check-text'>
                                                    <div className="todo-controls check-controls">
                                                        {
                                                            todo.isCompleted === true ? (
                                                                <CheckCircle
                                                                    onClick={() => toggleTodoState(todo.id)}
                                                                />
                                                            )
                                                                : (
                                                                    <Circle
                                                                        onClick={() => toggleTodoState(todo.id)}
                                                                    />
                                                                )
                                                        }
                                                    </div>
                                                    <a
                                                        onClick={() => setEditedTodo(todo.id)}
                                                        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                                                        className='todo-text-container'
                                                    >
                                                        <p
                                                            className="todo-text no-select"
                                                        >
                                                            {capitaliceFirstLetter(todo.todoText)}</p>
                                                    </a>
                                                </div>
                                                <div className="todo-controls todo-edit-delete">
                                                    <TrashSimple
                                                        onClick={() => deleteTodo(todo.id)}
                                                    />
                                                    <PencilSimple
                                                        onClick={() => setEditedTodo(todo.id)}
                                                    />
                                                </div>
                                            </div>
                                    }
                                </div>
                            ))
                            : <p>No tienes tareas pendientes</p>
                    }
                    {/* END OF TODOS ELEMENTS */}

                </div>
                <div className='arrow-down-container'>
                    {/*
                    <ArrowDown size={42} className='arrowdown-icon todo-icon' />
                */}
                </div>
            </div>

            <div className='action-buttons-row'>
                <form
                    className="todo-form"
                    onSubmit={addTodo}
                >
                    <input
                        type="text"
                        id="todo-input"
                        onChange={e => {
                            setTodo(e.target.value)
                        }}
                        value={todo}

                        placeholder='Añadir tarea...'
                    />
                    <button
                        type="submit"
                        className='button-todo-form main-action-btn'
                    >
                        <PlusCircle size={42} className='add-todo-btn' />
                    </button>
                </form>
            </div>

        </div >
    )
}