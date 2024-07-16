import React, { useContext } from 'react'
import FoodBrand from '../assets/img/foodbrand.png'
import '../assets/style/navi.scss'
import DataContext from '../context/DataContext'

const Navi = () => {
  const {companyName}=useContext(DataContext);
  return (
    <nav>
    <div className="foodbrand">
      <img src={FoodBrand} alt="food" />
      <h3>{companyName}</h3>
    </div>
    <ul className="liste">
      <li>Home</li>
      <li>Add Recipe</li>
      <li>About</li>
    </ul>
  </nav>
  )
}

export default Navi