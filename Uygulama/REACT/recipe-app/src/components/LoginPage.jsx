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
            <h3>Eysan's Recipe</h3>
            <h3>App</h3>
            <h3>Welcome!</h3>
        </div>
        <form onSubmit={handleLogin}>
            <h3>Giriş Yap</h3>
            <input value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder='Kullanıcı Adı'/>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder='Parola'/>
            <input type="submit" value={"Giriş"}/>
            <Link to="/eysansrecipe/home">Ziyaretçi olarak siteye giriş için tıklayınız..</Link>
        </form>
    </div>
  )
}

export default LoginPage