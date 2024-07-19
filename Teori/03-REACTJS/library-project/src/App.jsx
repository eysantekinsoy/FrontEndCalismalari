import React from 'react'
import Forms from './components/Forms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './services/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'



const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>}>

              <Route path='/' element={<PrivateRoute element={<Forms/>}/>}/>

          </Route>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App