import React from 'react';
import {getData} from '../../data'
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


// const ListItems = (props) => 
// {
//   return (
// <ul>
  
//   <li> {props.value.text}</li> 
// </ul>  
// )};

function NumberList(){
  const data = getData();
  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  return (
    <div>
      {/* <ul>
      {data.map((d) => (
        <li key={d.id} >
          <NavLink style={({isActive})=>{return {color: isActive ? 'red' : ""}}} to={`/listsandkeys/item/${d.id}`} className="text-decoration-none">
          {d.text}
        </NavLink>
        </li>
      ))}
    </ul> */}

    <nav className='navbar'>
      <div>
        <label htmlFor="search" className='form-label me-1'>Search: </label>
        <input type="text" className='form-control-sm' placeholder='Enter text:' value={searchParams.get("filter") || ""} onChange={(e)=>{
          let filter = e.target.value;
          if(filter){
            setSearchParams({filter});
          }else {
            setSearchParams({});
          }
        }} />
      </div>
    </nav>
      <div className='mb-2'>
        {/* search name from list */}
        {data.filter((d)=>{
          let filter = searchParams.get('filter');
          if(!filter) return true;
          let name = d.text.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        }).map((dt)=>
          (<NavLink key={dt.id}
            style={({isActive})=>{return {color: isActive?"red":"black"}}} 
            to={`/listsandkeys/item/${dt.id}` + location.search} 
            className="text-decoration-none mx-2 "
          >{dt.text}</NavLink>)
        )}
      </div>
      <hr />
    <Outlet />
    </div>
  )
}


export default NumberList;
