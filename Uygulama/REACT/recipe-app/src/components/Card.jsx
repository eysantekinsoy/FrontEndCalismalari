import React, { useContext } from 'react'
import '../assets/style/card.scss'
import Food from '../assets/img/dontfood.png'
import DataContext from '../context/DataContext'
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BiMessageSquareDetail } from "react-icons/bi";
import AuthContext from '../context/AuthContext';

const Card = ({food}) => {
  const {foodDelete,cardDuzenle,search} = useContext(DataContext)
  const {isAuthenticated}=useContext(AuthContext);

  return (
      (food.title.toLowerCase().startsWith(search.toLowerCase()) || food.description.toLowerCase().startsWith(search.toLowerCase()))&&
        <div className='card'>
          {isAuthenticated&&
          <>
          <button onClick={()=>foodDelete(food.id)} className='delete'><FaRegTrashAlt size={11}/> SİL</button>
          <button onClick={()=>cardDuzenle(food.id)} className='edit'><MdOutlineEdit/>DÜZENLE</button>
          </>
          }

          <Link to={food.id} className='detail'> <BiMessageSquareDetail /> DETAY</Link>
          <img src={food.image?food.image:Food} alt={food.title+"_kapak"} />
          <div className="card-body">
          <h4>{food.title}</h4>
          <p>{food.description}</p>
          </div>
        </div>
      )
}
export default Card