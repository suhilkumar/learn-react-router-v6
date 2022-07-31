import React from 'react'
import { useParams } from 'react-router-dom'
const Post = () => {
    const {category,id} = useParams();

  return (
    <div>
        <h1>Post Page with category</h1>
        <h3>data from url is {category}</h3>
        <h3>id from url is {id}</h3>
    </div>
  )
}

export default Post
