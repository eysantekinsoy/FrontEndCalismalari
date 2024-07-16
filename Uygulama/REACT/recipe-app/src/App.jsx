import React, {useEffect, useState} from 'react'
import Navi from './components/Navi'
import Header from './components/Header'
import CardList from './components/CardList'
import Forms from './components/Forms'
import axios from 'axios'

const App = ()=> {

  const companyName="RecipeApp";
  const [foods,setFoods] = useState([]);
  const [chooseFood,setChooseFood]=useState("");

  const foodAdd = async (newfood) => {
    let url="http://localhost:3000/foods";
    if(!chooseFood){
      setFoods(prev=>[...prev,newfood]);
      const response=await axios.post(url,newfood);
    }
    else{
      url+=`/${chooseFood.id}`;
      const response2=await axios.put(url,newfood);
      setFoods(prev=>
        prev.map(food=>{
          if(food.id===chooseFood.id){
            return {...response2.data}
          }
          else{
            return {...food}
          }
        })
      )
      setChooseFood("");
    }
}

const foodDelete = async (id) => {
  setFoods(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
  const url=`http://localhost:3000/foods/${id}`
  const response = await axios.patch(url,{isDeleted: true});
}

const foodsAll=async()=>{
  const url="http://localhost:3000/foods";
  const response=await fetch(url);
  const foods=await response.json();
  setFoods(foods);
}

const cardDuzenle = (id)=>{
  setChooseFood(foods.find(item=>item.id===id));
  console.log(foods.find(item=>item.id===id));
}

useEffect(()=>{
  foodsAll();
})

  return (
    <>
    <Navi navHead={companyName}/>
    <Header/>
    <Forms chooseFood={chooseFood} foodAdd={foodAdd} foods={foods}/>
    <CardList foods={foods} foodDelete={foodDelete} cardDuzenle={cardDuzenle}/>
    </>
  
  )

}

export default App
