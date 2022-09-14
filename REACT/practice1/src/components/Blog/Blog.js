import React from 'react';


function Blog(props){

  return (
   <div className=''>
     <div className='mx-2 '>
      Title: <ul className='list-unstyled d-flex '>
        {props.posts.map((post)=>
        <li key={post.id} className="mx-2">{post.title}</li>) }
      </ul>
     </div>
   <div>
    Title and content:
      {
        props.posts.map((post)=>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
        )
      }
   </div>

   </div>
  )
}


export default Blog;
