import React from 'react';
import ListItems from '../ListItems/ListItems';


function NumberList(props){
  const data = props.objData;
  return (
    <ul>
      {data.map((d)=> <ListItems key={d.id.toString()} value={d} />)}
    </ul>
  )
}


export default NumberList;
