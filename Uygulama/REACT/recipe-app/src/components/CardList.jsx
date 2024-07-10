import React from 'react'
import Card from './Card'

const CardList = ({foods}) => {
  return (
    <div className='card-list'>
      {
        foods.map(food=>
          <Card food={food} key={food.id}/>

        )

      }
    </div>
  )
}

export default CardList