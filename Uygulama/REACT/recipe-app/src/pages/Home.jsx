import React from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <CardList/>
    </div>
  )
}

export default Home;
