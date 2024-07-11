import React from 'react'
import Card from './Card'

const CardList = ({foods,foodDelete}) => {
  return (
    <div className='card-list'>
      {
        foods.map(food=>
          <Card food={food} foodDelete={foodDelete} key={food.id}/>
        )
      }
    </div>
  )
}

export default CardList