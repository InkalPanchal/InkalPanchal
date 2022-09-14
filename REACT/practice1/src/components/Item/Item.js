import React from 'react';
import {  useLocation, useNavigate, useParams } from "react-router-dom"
import { getSpecificData, deleteData } from '../../data';
function Item() 
{
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let data = getSpecificData(parseInt(params.id));
  return (
    <div>
      <h4>Name: {data.text}</h4>
      <p>Detail: {data.data}</p>
      <button onClick={()=>{deleteData(data.id); 
        navigate("/listsandkeys" + location.search)}} >Delete</button>
    </div>
)}


export default Item;
