import React, { useState } from 'react'

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskName, setEditTaskName] = useState('');
    
    const addTask = () => {
        if(taskName.trim() === '') return;

        const newTask = {
            id:todos.length + 1,
            name: taskName
        };
        setTodos([...todos, newTask]);
        setTaskName('');
    }
    const deleteTask = (id) => {
     setTodos(todos.filter(todo => todo.id !== id));
    }
    const startEditTask = (id, name) => {
        setEditTaskId(id);
        setEditTaskName(name);
    }

    const saveEditTask = () => {
        setTodos(todos.map(todo => 
            todo.id === editTaskId ? {...todo, name: editTaskName} : todo
        ));
        setEditTaskId(null)
        setEditTaskName('');
    }
  return (
    <>
    <div className="flex flex-col items-center bg-gray-100 p-8">
                <h1 className="text-3xl font-bold mb-4">Todo List</h1>
                <div className="flex mb-4">
                    <input
                        type='text'
                        placeholder='Add Task'
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-64 mr-2"
                    />
                    <button
                        type='button'
                        onClick={addTask}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Add
                    </button>
                </div>

                {/* Input for editing task, shown only when editing */}
                {
                    editTaskId && (
                        <div className="flex mb-4">
                            <input
                                type='text'
                                placeholder='Edit Task'
                                value={editTaskName}
                                onChange={(e) => setEditTaskName(e.target.value)}
                                className="border rounded-lg px-4 py-2 w-64 mr-2"
                            />
                            <button
                                onClick={saveEditTask}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                Save Task
                            </button>
                        </div>
                    )
                }

                {/* Display todo list */}
                <ul className="w-1/2">
                    {
                        todos.map(todo => (
                            <li
                                key={todo.id}
                                className="flex justify-between items-center bg-white shadow-md p-4 mb-2 rounded-lg"
                            >
                                {todo.name}
                                <div>
                                    <button
                                        onClick={() => startEditTask(todo.id, todo.name)}
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded-lg mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteTask(todo.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
    </>
  )
}

export default TodoApp
