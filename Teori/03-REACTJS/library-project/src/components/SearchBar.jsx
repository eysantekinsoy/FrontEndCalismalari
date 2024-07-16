import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const {secilenKategori,setSearch}=useContext(DataContext);
  return (
    <div className='search'>
        <h3 style={{marginLeft:"25px"}}>{secilenKategori}</h3>
        <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Ara..'  /> 
        <div>
            <FaSearch/>
        </div>
        
    </div>
  )
}

export default SearchBar