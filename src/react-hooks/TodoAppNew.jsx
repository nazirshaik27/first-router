import React, { useState } from 'react'

function TodoAppNew() {
    const [todos, setTodos] = useState([]);
    // State for new task inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // State for editing
    const [editTaskId, setEditTaskId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPhone, setEditPhone] = useState('');

    const addTask = () => {
        if(!name || !email || !phone) return;
        const newTask = {
            id:todos.length + 1,
            name,
            email,
            phone
        }

        setTodos([...todos, newTask]);
        setName('');
        setEmail('');
        setPhone('');
    }

    const deleteTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const startEditTask = (id, name, email, phone) => {
      setEditTaskId(id);
      setEditName(name);
      setEditEmail(email);
      setEditPhone(phone);
    }
    // Save the edited task
    const saveEditTask = () => {
      setTodos(todos.map(todo => 
        todo.id === editTaskId ? {...todo, name:editName, email:editEmail, phone:editPhone } : todo
      ))
      setEditTaskId(null);
      setEditName('');
      setEditEmail('');
      setEditPhone('');
    }
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Todo List with Contact Details</h1>
      <input 
       type='text'
       placeholder='Name'
       value={name}
       onChange={(e) => setName(e.target.value)}
       className="border rounded-lg px-4 py-2 w-64 mr-2"
      />
      <input 
       type='email'
       placeholder='Email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="border rounded-lg px-4 py-2 w-64 mr-2"
      />
      <input 
       type='text'
       placeholder='Phone'
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       className="border rounded-lg px-4 py-2 w-64 mr-2"
      />
      <button onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add</button>

      {/* Input for editing task, shown only when editing */}
      {
        editTaskId && (
          <>
          <div className="flex mb-4">
           <input 
            type='text'
            placeholder='name'
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 mr-2"
           />
           <input 
            type='email'
            placeholder='Email'
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 mr-2"
           />
           <input 
            type='text'
            placeholder='phone'
            value={editName}
            onChange={(e) => setEditPhone(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 mr-2"
           />
           <button onClick={saveEditTask} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Save Task</button>
           </div>
          </>
        )
      }
      {/* Display todos */}
      <ul className="w-1/2">
      {
        todos.map(todo => (
            <li key={todo.id} className="flex justify-between items-center bg-white shadow-md p-4 mb-2 rounded-lg">
                <strong>{todo.name}</strong> - {todo.email} - {todo.phone}
                <button 
                onClick={() => deleteTask(todo.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg"
                >Delete</button>
                <button 
                onClick={() => startEditTask(todo.id, todo.name, todo.email, todo.phone)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded-lg mr-2"

                >Edit</button>
            </li>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoAppNew
