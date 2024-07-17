import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../assets/data'

const BlogDetail = () => {
    const params=useParams()
    // console.log(params);
    // console.log(params.blogId);
    const parametre=params.blogId
  return (
    <div className='detay'>
        <img src={posts[parametre-1].picture} alt="resim" />
        <h3>{posts[parametre-1].title}</h3>
        <p>{posts[parametre-1].text}</p>
        <Link to="/ank-16/blog">Postlara geri dönmek için tıklayınız</Link>
    </div>
  )
}

export default BlogDetail