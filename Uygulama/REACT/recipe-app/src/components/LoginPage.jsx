import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/login.scss'

const LoginPage = () => {
    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
            await login(user,password);
            navigate("/home");
        }catch(error){
            alert("Login Failed!");
            setUser("");
            setPassword("");
        }
    }

  return (
    <div className='login-page'>
        <div className="head">
            <h3>Welcome to</h3>
            <h3>Eysan's Recipe Applicaton</h3>
        </div>
        <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <input value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder='Username'/>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password'/>
            <input type="submit" value={"Login"}/>
            <Link to="/eysansrecipe/home">Click here to log in to the site as a visitor</Link>
        </form>
    </div>
  )
}

export default LoginPage