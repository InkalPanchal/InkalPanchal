// component component
import data from '../data.json'
import { useState } from 'react';
export default function EmployeeData(){
    let [emp, setEmp] = useState({
        Id:"",
        Name:"",
        Gender:"",
        Email:"",
        PhoneNumber:"",
        Skills:[],
        JoiningDate: "",
        Department:""
    })
    let [errors, setErrors] = useState({
        Id:"",
        Name:"",
        Gender:"",
        Email:"",
        PhoneNumber:"",
        Skills:[],
        JoiningDate: "",
        Department:""
    });

    function validate(name, value){
        switch(name){
            case "Id":
                if(!value){ return "Id is required."}
                
                else{ return ""}

            case "Name":
                if(!value) {return "Name is required."}
                else { return "";}
            
            case "Gender":
                if(!value){return "Gender is reqired."}
                else { return ""}

            case "Email":
                if(!value){return "Email is reqired."}
                else if(!value.match(/^[a-z0-9]([a-z0-9_.]*)@([a-z0-9_\\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i)){
                    return "Enter valid Email."
                }
                else { return ""}

            case "PhoneNumber":
                if(!value){return "PhoneNumber is reqired."}
                else if(value.length < 10 || value.length > 10){return "Phone number must be 10 digits long."}
                else { return ""}

            case "JoiningDate":
                if(!value){return "JoiningDate is reqired."}
                else { return ""}

            case "Skills":
                if(!value){return "Skill is reqired."}
                else { return ""}

            case "Department":
                if(!value){return "Department is reqired."}
                else { return ""}
            default:
                return "";
        }
    }


    let skills = [{
        name: "Angular"
    }, {name:"Vue"}, {name:"React"}]

    let gender = [{name:"Male"}, {name:"Female"}, {name:"Other"}];
    const [checkedStatus, setCheckedStatus] = useState(new Array(skills.length).fill(false))

    function edit(obj) {
        console.log('edit', obj);
        let {
          Id,
          Name,
          Gender,
          Email,
          PhoneNumber,
          Skills,
          JoiningDate,
          Department,
        } = obj;
        setEmp({
          ...emp,
          Id: Id,
          Name: Name,
          Gender: Gender,
          Email: Email,
          PhoneNumber: PhoneNumber,
          Skills: Skills,
          JoiningDate: JoiningDate,
          Department: Department,
        });
        
        // console.log(`${checkedStatus}`);    
        let handleCheck = checkedStatus.map((item, indx)=>{
            // console.log(`status ${item} ${indx}`)
            // console.log(`skills index ${Skills[indx]}`)
            return Skills.indexOf(Skills[indx]) === indx ? item = true : item = false;
        })
        // console.log(`handleCheck ${handleCheck}`);
        setCheckedStatus(handleCheck);
            
    }
      

    // handlesubmit method call after form submitted
    
    function handleSubmit(e) {
        e.preventDefault();
        const employee = emp;
        let validationErrors = {};
        
        Object.keys(employee).forEach((name) =>{
            const error = validate(name, employee[name]);
            if(error && error.length > 0){
                validationErrors[name] = error;
                console.log(validationErrors[name]);
            }
        });
        if(Object.keys(validationErrors).length > 0){
            setErrors({...errors, validationErrors})
            
            return;
        }
        
        data.push(emp);
        setEmp({});
        e.target.reset();
        // setCheckedStatus(false)
    }
    let [isValid, setInValid ] = useState(true);
    function handleChange(e){
        const { name, value} = e.target;
        
        setEmp((prev)=>{return {...prev,
                [name]: value
        }})

        setErrors((prev)=>{return {...prev, [name]:validate(name, value)}})
        let error = validate(name, value);
        if(error.length === 0){
            setInValid(false)
        }else {
            setInValid(true);
        }
        
        
    }


    const [selectedOption, setSelectedOption] = useState();
    function handleRadio(e){
        let {name, value} = e.target;
        console.log(`${name} ${value}`);
        setSelectedOption((prev)=>{return {...prev,value}})
        // console.log(emp.Gender);
        // setEmp({...emp, Gender:selectedOption})
        console.log(`SelectedOption ${selectedOption}`);    
        

    }
    function handleSkill(indx) {
        
        let updatedChecked = checkedStatus.map((item, index)=>{
            return indx === index ? !item : item;
        })
        setCheckedStatus(updatedChecked);
        
        // oldSkills =  emp.Skills;
        var oldSkills = []
        let skill = updatedChecked.map((currentState, index)=>{
            if(currentState === true ){
                oldSkills.push(skills[index].name);
                // return skills[index].name
                
            }
            
        })
        
        // var oldSkills = []
        // oldSkills.push(skill);
       
        console.log(oldSkills);
        setEmp({...emp, Skills:oldSkills})
      }
    function upadte(obj) {
        console.log(obj);
    
        const d = data.map((value) => {
          if (value.Id === parseInt(obj.Id)) {
            return obj;
          } else {
            return value;
          }
        });
    
        console.log('obj', d);
        data.splice(0, data.length, ...d);
        setEmp([...data]);
      }
    function deleteEmp(obj) {
        console.log(obj);
        // let d = [];
        data.map((val) => {
          return val.Id === obj.Id ? `obj ${obj}` : `all data ${val}`;
        });
        let index = data.findIndex((x) => x.Id === obj.Id);
        console.log(index);
    
        data.splice(index, 1);
        console.log('After delete' + data);
        setEmp([...data]);
      }
    return (
        <div>
            <div className='m-3'>
            <form onSubmit={handleSubmit.bind(this)}>
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
                <span className="text-danger">{errors.Id}</span>
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
                <span className="text-danger">{errors.Name}</span>
                <div>
                    <label htmlFor="Gender">Gender:</label>
                </div>
                <div>
                    <input 
                        type="radio"  
                        name='Gender'
                        value="Male"
                        checked={selectedOption === "Male"}
                        onChange={()=>handleRadio}
                    />Male {" "}
                        
                    <input 
                        type="radio"  
                        name='Gender'
                        value="Female"
                        checked={selectedOption === "Female"}
                        onChange={handleRadio}
                    />Female {" "}
                        
                    <input 
                        type="radio"  
                        name='Gender'
                        value="Other"
                        checked={selectedOption === "Other"}
                        onChange={handleRadio}
                    />Other {" "}
                </div> 
                        
                {/* {gender.map(({name}, index)=>{
                    return (
                        <div key={index}>
                            <input 
                                type="radio"  
                                name='Gender'
                                value={name}
                                checked={checkedRadio[index]}
                                onChange={()=>{return handleRadio(index)}}
                            />
                            <label htmlFor="">{name} </label>                        
                            
                        </div>
                    )
                })

                } */}
                <span className="text-danger">{errors.Gender}</span>
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
                <span className="text-danger">{errors.Email}</span>
                <div>
                    <label htmlFor="Phonenumber">PhoneNumber:</label>
                </div>
                <div>
                    <input type="number" name="PhoneNumber" id="" value={emp.PhoneNumber} onChange={handleChange} />
                </div>
                <span className="text-danger">{errors.PhoneNumber}</span>
                <div>
              <label htmlFor="Skills">Skills</label>
            </div>

            {skills.map(({name},index)=>{
                return (
                    <div key={index}>
                        <input id='skill'
                            type="checkbox"
                            name="Skills"
                            value={name}
                            checked={checkedStatus[index]}
                            onChange={()=>{return handleSkill(index)}}
                        />
                        <label htmlFor="">{name}</label>
                    </div>
                )
            })}
            <span className="text-danger">{errors.Skills}</span>
            {/* {checkedStatus} */}
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
            <span className="text-danger">{errors.JoiningDate}</span>
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
            <span className="text-danger">{errors.Department}</span>
            <div>
                <input type="submit" value="submit" disabled={isValid}/>
            </div>
            </form>

            <br />
            <button onClick={upadte.bind(this, emp)}>Update</button>
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
                        {/* <td>{d.Skills + ','}</td> */}
                        <td>{d.Skills.length > 0 ? d.Skills.join(", ") : d.Skills + ','}</td>
                        <td>{d.Department}</td>
                        <td>{d.JoiningDate}</td>
                        <td>
                            <button onClick={edit.bind(this, d)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={deleteEmp.bind(this, d)}>Delete</button>
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>

            <div id='demo'></div>
        </div>
        </div>
    )
}