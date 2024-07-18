import React, { useContext } from 'react'
import '../assets/style/search.scss'
import DataContext from '../context/DataContext'
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
    const {setSearch}=useContext(DataContext)
  return (
    <div className='search'><IoMdSearch size={25}/>
        <input onChange={(e)=>setSearch(e.target.value)} type="text"  placeholder='Search'/>

    </div>
  )
}

export default SearchBar