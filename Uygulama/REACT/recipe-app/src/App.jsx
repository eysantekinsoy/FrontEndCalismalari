import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import Forms from "./components/Forms";
import About from "./components/About";
import CardDetail from "./components/CardDetail";
import Loading from "./components/Loading";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./services/PrivateRoute";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/*" element={<Loading />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="eysansrecipe" element={<Navi />}>
            <Route path="/eysansrecipe/home" element={<Home />} >

              <Route path='/eysansrecipe/home' element={<PrivateRoute element={<Forms/>}/>}/>
            
            </Route>

            <Route path="/eysansrecipe/home/:cardId" element={<CardDetail />} />

            <Route path="forms" element={<Forms />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
