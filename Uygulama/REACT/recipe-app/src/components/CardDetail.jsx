import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { foods } from '../data/data.js';
import "../assets/style/cardDetail.scss";

const CardDetail = () => {
    const params=useParams()
    const parametre=params.cardId;
  return (
    <div className='detay'>
        <img src={foods[parametre-1].image} alt="food" />
        <h3>{foods[parametre-1].title}</h3>
        <p>{foods[parametre-1].description}</p>
        <Link to="/eysansrecipe/home">Geri dönmek için tıklayınız..</Link>
    </div>
  )
}

export default CardDetail