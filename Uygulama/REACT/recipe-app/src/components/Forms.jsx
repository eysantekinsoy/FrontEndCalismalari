import React, {useState} from 'react'
import '../assets/style/forms.scss'


const Forms = ({foodAdd,foods}) => {
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setİmage]=useState("");
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      foodAdd({
        id:(Number(foods[foods.length-1].id)+1).toString(),
        title:title,
        description:description,
        image:image
      });
      setTitle("");
      setDescription("");
      setİmage("");
    }
    return (
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder='Recipe Title' />
        <textarea value={description} onChange={e=>setDescription(e.target.value)} placeholder='Recipe Description'></textarea>
        <input value={image} onChange={e=>setİmage(e.target.value)}  type="url" placeholder='İmage URL' />
        <input type='submit' value="Add Recipe" />
      </form>
    )
  }
export default Forms