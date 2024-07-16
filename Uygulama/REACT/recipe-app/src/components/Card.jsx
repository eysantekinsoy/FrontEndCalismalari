import React from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/dontfood.png'

const Card = ({food,foodDelete,cardDuzenle}) => {
  return (
        <div className='card'>
          <button onClick={()=>foodDelete(food.id)} className='delete'>SİL</button>
          <button onClick={()=>cardDuzenle(food.id)} className='edit'>DÜZENLE</button>
          <img src={food.image?food.image:Food} alt={food.title+"_kapak"} />
          <div className="card-body">
          <h4>{food.title}</h4>
          <p>{food.description}</p>
          </div>
        </div>
      )
}

export default Card