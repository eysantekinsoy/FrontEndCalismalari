import React, { useContext } from 'react'
import '../assets/style/forms.scss'
import DataContext from '../context/DataContext';

const Forms = () => {
  const {chooseFood,
    title,
    description,
    image,
    setTitle,
    titleErr,
    descriptionErr,
    imageErr,
    setTitleErr,
    setDescriptionErr,
    setİmageErr,
    setDescription,
    setİmage,
    handleSubmit
  }=useContext(DataContext);
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h3>{chooseFood?"Edit":"Add"}</h3>
          <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          {titleErr && <p style={{ color: 'red' }}>Please enter title</p>}
          <br />
          <textarea placeholder="Recipe Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
          {descriptionErr && <p style={{ color: 'red' }}>Please enter description</p>}
          <br />
          <input type="url" placeholder="Image URL" value={image} onChange={(e) => setİmage(e.target.value)}/>
          {imageErr && <p style={{ color: 'red' }}>Please enter image</p>}
          <br />
          <input type="submit" value={chooseFood?"Edit":"Add"} />
        </form>
      </div>
    );
  }
export default Forms