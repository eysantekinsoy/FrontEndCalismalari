import React, { useContext, useEffect, useState } from "react";
import "../assets/style/search.scss";
import DataContext from "../context/DataContext";
import { IoMdSearch } from "react-icons/io";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const { setSearch } = useContext(DataContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = ()=>{
    navigate("/login");
  }
  const handleLogout = ()=>{
    logout();
    navigate("/login");
  }
  const getCurentUser = async()=>{
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url,{
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
      }
    });
    const user = await response.data
    console.log(user);
    setCurrentUser(user);
  }
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("user"))){
      getCurentUser();
    }
  },[])

  return (
    <div className="search">
      <div className="kullanici">
        {currentUser && (
          <div className="kullanici-card">
            <img src={currentUser.avatar} alt="profil" />
            <div className="user-text">
              <span>
                {currentUser.email} - {currentUser.role}
              </span>
            </div>
          </div>
        )}
        <button onClick={isAuthenticated ? handleLogout : handleLogin}>{isAuthenticated ? "Çıkış" : "Giriş"}
        </button>
      </div>
      <div className="search-bar">
        <IoMdSearch size={25} />
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  )
}

export default SearchBar
