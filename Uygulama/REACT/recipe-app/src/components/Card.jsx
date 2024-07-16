import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/dontfood.png'
import DataContext from '../context/DataContext'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";


const Card = ({food}) => {
  const {foodDelete,cardDuzenle} = useContext(DataContext);
  return (
        <div className='card'>
          <button onClick={()=>foodDelete(food.id)} className='delete'><FaRegTrashAlt size={11}/> SİL</button>
          <button onClick={()=>cardDuzenle(food.id)} className='edit'><MdOutlineEdit/>DÜZENLE</button>
          <img src={food.image?food.image:Food} alt={food.title+"_kapak"} />
          <div className="card-body">
          <h4>{food.title}</h4>
          <p>{food.description}</p>
          </div>
        </div>
      )
}

export default Card