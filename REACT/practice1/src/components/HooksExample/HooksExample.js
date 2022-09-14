import React, {useEffect, useState} from 'react';

function HooksExample(props){
  const [count, setCount] = useState(0);
  let [isOnline, setIsOnline] = useState(false);
  useEffect(()=>{
    if(isOnline){
      document.title = count
    }else {
      document.title = 'React App'
    }
  })

    return (
      
      <div className='m-2'>
      {isOnline ? (
        <div>
          Online
          <p>You clicked {count} times</p>
          <button onClick={()=>setCount(count + 1)} className='btn btn-outline-success'>Increase count</button><br />
          <button onClick={()=> setIsOnline(!isOnline)} className="btn btn-outline-primary">Go Offline</button>
        </div>
      ) : (
        <div>
          Loading...<br/>
          <button onClick={()=> setIsOnline(!isOnline)} className="btn btn-outline-primary">Go Online</button>
        </div>
      )

      }    
    </div>
  )}

export default HooksExample;
