import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    
    if(!username || !password){
        setError("Please fill out both fields")
    }else{
        setError('');
        navigate('/about')
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <input 
             type='text'
             placeholder='user Name'
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <input 
             type='password'
             placeholder='Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <br />
        {error && <p style={{color:'red'}}>{error}</p>}
        <button type='submit' disabled={!username || !password}>Submit</button>
      </form>
    </div>
  )
}

export default Login
