import React from 'react'
import '../assets/style/card.scss'

const Card = ({food}) => {
  return (
        <div className='card'>
          <img src={food.image?food.image:food} alt={food.title+"_kapak"} />
          <div className="card-body">
            <h4>{food.title}</h4>
            <p>{food.description}</p>
          </div>
        </div>
      )
}

export default Card