import React from 'react'
import Card from './Card'

const CardList = ({foods,foodDelete,cardDuzenle}) => {
  return (
    <div className='card-list'>
      {
        foods.map(food=>
          !foods.isDeleted &&
            <Card food={food} foodDelete={foodDelete} cardDuzenle={cardDuzenle} key={food.id}/>
          )
      }
    </div>
  )
}

export default CardList