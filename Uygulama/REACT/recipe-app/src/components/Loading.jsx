import React, { useEffect } from 'react'
import '../assets/style/loading.scss'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/eysansrecipe/home");
    },2000)
  })
  
  return (
    <div className='loading'>
      <div className='loader'></div>
    </div>
  )
}

export default Loading