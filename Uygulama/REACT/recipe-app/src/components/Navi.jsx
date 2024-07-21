import React, { useContext } from "react";
import FoodBrand from "../assets/img/foodbrand.png";
import "../assets/style/navi.scss";
import DataContext from "../context/DataContext";
import { NavLink, Outlet } from "react-router-dom";


const Navi = () => {
  const { companyName } = useContext(DataContext);
  return (
    <>
      <nav>
        <div className="foodbrand">
          <img src={FoodBrand} alt="food" />
          <h3>{companyName}</h3>
        </div>
        <ul className="liste">
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="forms">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  
  )
}

export default Navi;