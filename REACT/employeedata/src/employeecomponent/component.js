// component component
import data from '../data.json'
import { useState } from 'react';
export default function EmployeeData(){
    let [emp, setEmp] = useState({
        Id:0,
        Name:"",
        Gender:"",
        Email:"",
        PhoneNumber:"",
        Skills:[],
        JoiningDate: new Date(),
        Department:""
    })

    // const Skills = [
    //     {id:1, value:"Angular"},
    //     {id:2, value:"Vue"},
    //     {id:3, value:"React"},
    //     {id:4, value:"HTML"},
    //     {id:5, value:"CSS"},
    //     {id:6, value:"Bootstrap"},
    //     {id:7, value:"JAVA"},
    //     {id:8, value:"Node"},
    //     {id:9, value:"Dotnet"}
    // ];
    
    
    // const [checkedStatus, setCheckedStatus] = useState(new Array(Skills.length).fill(false));
    
    // add new employee
    let [employee, setEmployee] = useState({
        Id:0,
        Name:"",
        Gender:"",
        Email:"",
        PhoneNumber:"",
        Skills:[],
        JoiningDate: new Date(),
        Department:""
    })
    function CreateEmployee(){
        setEmployee(emp);
        data.push(employee);
        localStorage.setItem("emp", JSON.stringify(data));
        document.getElementById('demo').innerHTML = JSON.parse(localStorage.getItem("emp")).map((val, index)=>{return (<div key={index}>{val.Name}</div>)})
        // return data.push(emp)s
    }

    // handlesubmit method call after form submitted
    function handleSubmit(e) {
        e.preventDefault();
        CreateEmployee();
    }
    function handleChange(e){
        const { name, value} = e.target;
        
        setEmp((prev)=>{return {...prev,
                [name]: value
        }})
        
        
    }
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Id">ID:</label>
                </div>
                <div>
                    <input 
                        type="number" 
                        name='Id'
                        value={emp.Id}
                        onChange={handleChange}           
                    />
                </div>
                <div>
                    <label htmlFor="Name">Name:</label>
                </div>
                <div>  
                    <input 
                        type="text" 
                        name='Name'
                        value={emp.Name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Gender">Gender:</label>
                </div>
                <div>
                    <input 
                        type="radio"  
                        name='Gender'
                        value="Male"
                        onChange={handleChange}
                    />Male {" "}
                </div>
                <div>
                    <input 
                        type="radio"  
                        name='Gender'
                        value="Female"
                        onChange={handleChange}
                    />Female {" "}
                </div>
                <div>
                    <input 
                        type="radio"  
                        name='Gender'
                        value="Other"
                        onChange={handleChange}
                    />Other {" "}
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                </div>
                <div>
                    <input 
                        type="email"
                        name='Email' 
                        value={emp.Email}
                        onChange={handleChange}   
                    />
                </div>
                <div>
                    <label htmlFor="Phonenumber">PhoneNumber:</label>
                </div>
                <div>
                    <input type="number" name="PhoneNumber" id="" value={emp.PhoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="Skills">Skills</label>
                </div>
                <input 
                    type="checkbox"
                    name="Skills"
                    value="Angular"
                    onChange={handleChange}
                />
                <label htmlFor="">Angular</label>
                <input 
                    type="checkbox"
                    name="Skills"
                    value="Vue"
                    onChange={handleChange}
                />
                <label htmlFor="">Vue</label>

                {/* <ul>
                    {
                        Skills.map(({id, value})=>{
                            return (
                                <li key={id}>
                                    <input 
                                        type="checkbox" 
                                        id={`checkbox ${id}`}
                                        name={value}
                                        // checked={checkedStatus[id]}
                                        onChange={()=> handleCheckbox(id)}    
                                    />
                                    <label htmlFor={`checkbox ${id}`}>{value}</label>
                                </li>
                            )
                        })
                    }
                </ul> */}
                {/* <div>
                    <input 
                        type="checkbox"
                        name='Skills'
                        value="React"
                        id='Skills'
                        onChange={handleChange}
                    />
                    <label htmlFor="Skills">React</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name='Skills'
                        value="Angular"
                        id='Skills'
                        onChange={handleChange}
                    />
                    <label htmlFor="Skills">Angular</label>
                </div>
                <div>
                    <input 
                        type="checkbox"
                        name='Skills'
                        value="Vue"
                        id='Skills'
                        onChange={handleChange}
                    />
                    <label htmlFor="Skills">Vue</label>
                </div> */}



                
                <div>
                    <label htmlFor="date">Joining Date:</label>
                </div>
                <div>
                    <input 
                        type="date" 
                        name='JoiningDate'
                        value={emp.JoiningDate}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="department">Department</label>
                </div>
                <div>
                    <select name="Department" value={emp.Department} id="Department" onChange={handleChange}>
                        <option value="Dotnet">Dotnet</option>
                        <option value="Node/React">Node/React</option>
                        <option value="PHP">PHP</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>PhoneNumber</th>
                        <th>Skills</th>
                        <th>Department</th>
                        <th>Joining Date</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((d)=> {return (
                    <tr key={d.Id}>
                        <td>{d.Id}</td>
                        <td>{d.Name}</td>
                        <td>{d.Email}</td>
                        <td>{d.Gender}</td>
                        <td>{d.PhoneNumber}</td>
                        <td>{d.Skills.join(", ")}</td>
                        <td>{d.Department}</td>
                        <td>{d.JoiningDate}</td>
                    </tr>
                )})}
                </tbody>
            </table>

            <div id='demo'></div>
        </div>
        </div>
    )
}