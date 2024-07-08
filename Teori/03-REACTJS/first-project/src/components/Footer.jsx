import React from 'react'
import firstName, { age, image } from '../data'
import './footer.css'

const Footer = () => {
  return (
    <div>
        {firstName} - {age}
        <div className="flex">
            {
                image.map((resim,index)=>
                    <img key={index} src={resim} alt="resim" />
                )
            }
        </div>
    </div>
  )
}

export default Footer