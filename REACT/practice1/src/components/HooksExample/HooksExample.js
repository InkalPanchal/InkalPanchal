import React, {useEffect, useState} from 'react';

function HooksExample(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = (`You clicked ${count} times`)
  })
  return (
    <div className='m-2'>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count + 1)} className='btn btn-outline-success'>Increase count</button>
    </div>
  )
}

export default HooksExample;
