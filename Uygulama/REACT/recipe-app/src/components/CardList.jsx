import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'
import SearchBar from './SearchBar'

const CardList = () => {
  const {foods}=useContext(DataContext)
  return (
    <>
    <SearchBar/>
    <div className='card-list'>
      {
        foods.map(food=>
          !food.isDeleted &&
            <Card food={food} key={food.id}/>
          )
      }
    </div>
    </>
  )
}

export default CardList