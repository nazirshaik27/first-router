import React, { useState } from 'react'

const About = () => {
 const [todos, setTodos] = useState([]);
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');

 const [editTaskId, setEditTaskId] = useState(null);
 const [editName, setEditName] = useState('');
 const [editEmail, setEditEmail] = useState('');
 const [editPhone, setEditPhone] = useState('');

 const addTask = () => {
  if(!name || !email || !phone) return;

  const newTask = {
    id: todos.length + 1,
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

 const editTask = (id, name, email, phone) => {
  setEditTaskId(id);
  setEditName(name);
  setEditEmail(email);
  setEditPhone(phone);
 };

 const saveEditTask = () => {
  setTodos(todos.map(todo => 
    todo.id === editTaskId ? {...todo, name:editName, email:editEmail, phone:editPhone} : todo
  ))

  setEditTaskId(null);
  setEditName('');
  setEditEmail('');
  setEditPhone('');
 }
  return (
    <>
     <div className='app'>
      <div>
        <input 
         type='text'
         placeholder='Add Name'
         value={name}
         onChange={(e) => setName(e.target.value)}
        />

        <input 
         type='email'
         placeholder='Email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />

        <input 
         type='text'
         placeholder='phone'
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {/* saveEditTask */}
      {
       editTaskId && (
        <>
         <input 
         type='text'
         placeholder='Add Name'
         value={editName}
         onChange={(e) => setEditName(e.target.value)}
        />
        <input 
         type='text'
         placeholder='Email'
         value={editEmail}
         onChange={(e) => setEditEmail(e.target.value)}
        />
        <input 
         type='text'
         placeholder='phone'
         value={editPhone}
         onChange={(e) => setEditPhone(e.target.value)}
        />
        <button onClick={saveEditTask}>Save</button>
        </>
       )
      }
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              <strong>{todo.name} | {todo.email} | {todo.phone}</strong>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              <button onClick={() => editTask(todo.id, todo.name, todo.email, todo.phone)}>Edit</button>
            </li>
          ))
        }
      </ul>
     </div>
    </>
  )
}

export default About
