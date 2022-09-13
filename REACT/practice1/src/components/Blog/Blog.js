import React from 'react';


function Blog(props){

  return (
   <div className='d-flex'>
     <div className='mx-2'>
      <ul className='list-unstyled'>
        {props.posts.map((post)=>
        <li key={post.id}>{post.title}</li>)}
      </ul>
     </div>
   <div>
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
