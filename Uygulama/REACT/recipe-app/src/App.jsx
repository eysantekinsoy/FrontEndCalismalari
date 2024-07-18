import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import Forms from "./components/Forms";
import About from "./components/About";
import CardDetail from "./components/CardDetail";
import Loading from "./components/Loading";
import CardList from "./components/CardList";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Loading/>}/>
        <Route path='eysansrecipe' element={<Navi/>}>
          <Route path='home' element={<Home/>} />

          {/* <Route path='cardlist' element={<CardList/>} /> */}
          <Route path='/nav/home/:cardId' element={<CardDetail/>} />



          <Route path='forms' element={<Forms/>} />
          <Route path='about' element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
