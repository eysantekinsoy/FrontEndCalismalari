import React, {useEffect, useState} from 'react'
import Navi from './components/Navi'
import Header from './components/Header'
import CardList from './components/CardList'
import Forms from './components/Forms'

const App = ()=> {

  const companyName="RecipeApp";
  const [foods,setFoods] = useState([]);

  const foodAdd = (newfood) => {
  setFoods(prev=>[...prev,newfood]);
}

const foodDelete = (id) => {
  setFoods(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
}

const foodsAll=async()=>{
  const url="http://localhost:3000/foods";
  const response=await fetch(url);
  const foods=await response.json();
  setFoods(foods);
}

useEffect(()=>{
  foodsAll()
},[])


  return (
    <>
    <Navi navHead={companyName}/>
    <Header/>
    <Forms foodAdd={foodAdd} foods={foods}/>
    <CardList foods={foods} foodDelete={foodDelete}/>
    </>
  
  )

}

export default App
