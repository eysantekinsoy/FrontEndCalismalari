import React from "react";
import { posts } from "../assets/data";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog">
      
      {posts.map((item) => (
        <Link to={item.id} key={item.id} className="card">
          <img src={item.picture} alt="news" />
          <div className="card-body">
            <h4>{item.title}</h4>
            <span>{item.date}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog;
