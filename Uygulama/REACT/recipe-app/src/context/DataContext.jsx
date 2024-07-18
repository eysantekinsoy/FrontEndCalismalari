import axios from "axios";
import { createContext, useEffect, useState } from "react";


const DataContext =createContext();

export const DataProvider=({children})=>{

    const companyName="RecipeApp";
    const [foods,setFoods] = useState([]);
    const [chooseFood,setChooseFood]=useState("");
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[image,setİmage]=useState("");
    const [titleErr, setTitleErr] = useState(false);
    const [descriptionErr, setDescriptionErr] = useState(false);
    const [imageErr, setİmageErr] = useState(false);
    const [search, setSearch]=useState("");
  
    const foodAdd = async (newfood) => {
      let url="http://localhost:3000/foods";
      if(!chooseFood){
        setFoods(prev=>[...prev,newfood]);
        const response=await axios.post(url,newfood);
      }
      else{
        url+=`/${chooseFood.id}`;
        const response2=await axios.put(url,newfood);
        setFoods(prev=>
          prev.map(food=>{
            if(food.id===chooseFood.id){
              return {...response2.data}
            }
            else{
              return {...food}
            }
          })
        )
        setChooseFood("");
      }
  }
  
  const foodDelete = async (id) => {
    //frontend
    setFoods(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
    //backend
    const url=`http://localhost:3000/foods/${id}`
    const response = await axios.patch(url,{isDeleted: true});
  }
  
  const foodsAll=async()=>{
    const url="http://localhost:3000/foods";
    const response=await fetch(url);
    const foods=await response.json();
    setFoods(foods);
  }
  
  const cardDuzenle = (id)=>{
    setChooseFood(foods.find(item=>item.id===id));
    console.log(foods.find(item=>item.id===id));
  }

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
  
  useEffect(()=>{
    foodsAll();
  })

  useEffect(()=>{
    if(chooseFood){
      setTitle(chooseFood.title);
      setDescription(chooseFood.description);
      setİmage(chooseFood.image);
    }
  },[chooseFood])


    return <DataContext.Provider value={{
        companyName, //Navi
        chooseFood, //Forms
        title,
        description,
        image,
        setTitle,
        setDescription,
        setİmage,
        titleErr,
        descriptionErr,
        imageErr,
        setTitleErr,
        setDescriptionErr,
        setİmageErr,
        handleSubmit,
        foods, //CardList
        foodDelete,cardDuzenle, //Card
        search,setSearch
    }}>
        {children}
           </DataContext.Provider>
}

export default DataContext;