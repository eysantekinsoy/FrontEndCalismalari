import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'

const CardList = () => {
  const {foods}=useContext(DataContext)
  return (
    <div className='card-list'>
      {
        foods.map(food=>
          !food.isDeleted &&
            <Card food={food} key={food.id}/>
          )
      }
    </div>
  )
}

export default CardList