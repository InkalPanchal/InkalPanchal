import data from '../data.json';
import { useState } from 'react';

export default function empData() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("")
    const [skills, setSkills] = useState([
        "angular","vue","react"
    ]);
    const [gender, setGender] = useState("");
    const [department, setDepartment] = useState("")
    const [joindate, setJoindate] = useState(Date);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Id</label>
                <input 
                    type="number"
                    name="Id"
                    value={id}
                    onChange={(e)=>{setId(e.target.value)}} />

                <label htmlFor="">Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}} />
                
                <input 
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e)=>{setGender(e.target.value)}} />
                <label htmlFor="">Male</label>
                
                <input 
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e)=>{setGender(e.target.value)}} />    
                <label htmlFor="">Female</label>

                {skills.map((val,index)=>{
                    return (
                        <div>
                            <input type="checkbox"
                            name='skills'
                            value={val}
                            onChange={(e)=>{setSkills(val[index] = e.target.value)}}
                        />
                        <label htmlFor="">{val}</label>
                        </div>
                    )
                })}

                
            </form>
        </div>
    )
}