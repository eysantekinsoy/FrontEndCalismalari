import React, {useState} from 'react'
import '../assets/style/forms.scss'

const Forms = ({foodAdd,foods}) => {
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setİmage]=useState("");
    const [titleErr, setTitleErr] = useState(false);
    const [descriptionErr, setDescriptionErr] = useState(false);
    const [imageErr, setİmageErr] = useState(false);
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      setTitleErr(false);
      setDescriptionErr(false);
      setİmageErr(false);
      if(title.trim() && description.trim() && image.trim())
        {
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
      else{
        !title.trim() && setTitleErr(true)
        !description.trim() && setDescriptionErr(true)
        !image.trim() && setİmageErr(true)
      }
    }

    return (
      <div>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          {titleErr && <p style={{ color: 'red' }}>Please enter title</p>}
          <br />
          <textarea placeholder="Recipe Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          {descriptionErr && <p style={{ color: 'red' }}>Please enter description</p>}
          <br />
          <input type="url" placeholder="Image URL" value={image} onChange={(e) => setİmage(e.target.value)}/>
          {imageErr && <p style={{ color: 'red' }}>Please enter image</p>}
          <br />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
export default Forms