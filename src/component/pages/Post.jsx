import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
const Post = () => {
    const {category,id} = useParams();

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(' the url is localhost:3000/post/laptop/123?price=20')
    console.log(searchParams.get('price'))
    
    console.log(` lets say u have multiple query :
    // the url is localhost:3000/post/laptop/123?price=20&sort=asc`)
    console.log(searchParams.get('price'))
    console.log(searchParams.get('sort'))
    

  return (
    <div>
        <h1>Post Page with category</h1>
        <h3>data from url is {category}</h3>
        <h3>id from url is {id}</h3>
    </div>
  )
}

export default Post
