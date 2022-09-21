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

    // let gender = [{name:"Male"}, {name:"Female"}, {name:"Other"}];
    const [checkedStatus, setCheckedStatus] = useState(new Array(skills.length).fill(false))
    let [showBtn, setShowBtn] = useState(true);
    function edit(obj) {
        setShowBtn(false);
        setInValid(true);
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
        setSelectedOption(obj.Gender);
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
        // setShowBtn(true);
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
        setSelectedOption(null);
        setCheckedStatus(checkedStatus.map((value)=>{return value === true ? false : value }))
        
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

    // let initialState = "Male"s
    const [selectedOption, setSelectedOption] = useState(null);
    function handleRadio(e){
        // let {value} = e.target;
        // console.log(` ${value}`);
        setSelectedOption(e.target.value)
        console.log(selectedOption);
        setEmp({...emp, Gender:e.target.value })

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
            // else {
            // let idx = oldSkills.indexOf(skills[index].name);
            // if (idx > -1) {
            //   oldSkills.splice(index, 1);
            // }}
            
        })
        
       
       
        console.log(oldSkills);
        setEmp({...emp, Skills:oldSkills})
      }

    
    function update(obj){
        
        
        console.log('obj', obj);

        // const d = data.map((value, index) => {
        //   if (index-1 === parseInt(obj.Id)) {
        //     return obj;
        //   } else {
        //     return value;
        //   }
        // });
        let d =[];
        d = data.map((value)=>{
            return value.Id === obj.Id ? obj : value;
        })
        console.log('d', d);
        // d.splice(, d.length, obj)
        // let dt = d.find((x)=>x.Id === obj.Id ? x.Name = obj.Name, x. : x);
        // console.log(dt);
        // data.splice(0, data.length, "")

        data.splice(0, data.length, ...d);
        // console.log(data);
        setEmp([...data]);
        setEmp({...emp, Id:"", Name:"", Email:"", PhoneNumber:"", Gender:"", JoiningDate:"", Department:"", Skills:""})

        setCheckedStatus(checkedStatus.map((value)=>{return value === true ? false : value }))
        // setCheckedStatus(false)
        setSelectedOption("")
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
            <form onSubmit={handleSubmit.bind(this)} className='form  p-3'>
                <div className="d-flex">
                <div className='col-sm-1'>
                    <label className='form-label m-1'  htmlFor="Id">ID:</label>
                </div>
                <div>
                    <input className='form-control-sm m-1' 
                        type="number" 
                        name='Id'
                        value={emp.Id}
                        onChange={handleChange}           
                    />
                </div>
                </div>
                <span className="text-danger">{errors.Id}</span>
                <div className="d-flex">
                <div className='col-sm-1 ms-1'>
                    <label htmlFor="Name">Name:</label>
                </div>
                <div>  
                    <input className='form-control-sm m-1' 
                        type="text" 
                        name='Name'
                        value={emp.Name}
                        onChange={handleChange}
                    />
                </div>
                </div>
                <span className="text-danger">{errors.Name}</span>
                <div className="d-flex">
                <div className='col-sm-1 mx-1'>
                    <label htmlFor="Gender">Gender:</label>
                </div>
                <div name="Gender">
                <input className='me-1' 
                        type="radio"  
                        value="Male"
                        checked={selectedOption === 'Male'}
                        onChange={handleRadio}
                    />Male {" "}
                        
                    <input className='me-1' 
                        type="radio"  
                        value="Female"
                        checked={selectedOption === 'Female'}
                        onChange={handleRadio}
                    />Female {" "}
                        
                    <input className='me-1' 
                        type="radio"  
                        value="Other"
                        checked={selectedOption === 'Other'}
                        onChange={handleRadio}
                    />Other {" "}
                </div> 
                </div>
                        
                <span className="text-danger">{errors.Gender}</span>
                <div className="d-flex">
                <div className='col-sm-1 mt-2 mx-1'>
                    <label htmlFor="Email">Email:</label>
                </div>
                <div>
                    <input className='form-control-sm m-1' 
                        type="email"
                        name='Email' 
                        value={emp.Email}
                        onChange={handleChange}   
                    />
                </div>
                </div>
                <span className="text-danger">{errors.Email}</span>
                <div className="d-flex">
                <div className='col-sm-1'> 
                    <label className='form-label m-1'  htmlFor="Phonenumber">PhoneNumber:</label>
                </div>
                <div>
                    <input className='form-control-sm m-1' type="number" name="PhoneNumber" id="" value={emp.PhoneNumber} onChange={handleChange} />
                </div>
                </div>
                <span className="text-danger">{errors.PhoneNumber}</span>
                <div>
            </div>
            <div className="d-flex">
            <label className='form-label m-1 col-sm-1' htmlFor="Skills">Skills</label>

            {skills.map(({name},index)=>{
                return (
                    <div key={index}>
                        <input className='me-2' id='skill'
                            type="checkbox"
                            name="Skills"
                            value={name}
                            checked={checkedStatus[index]}
                            onChange={()=>{return handleSkill(index)}}
                        />
                        <label className='form-label me-1'  htmlFor="">{name}</label>
                    </div>
                )
            })}
            </div>
            <span className="text-danger">{errors.Skills}</span>
            
            <div className="d-flex">
            <div className='col-sm-1'>
                <label className='form-label m-1'  htmlFor="date">Joining Date:</label>
            </div>
            <div>
                <input className='form-control-sm m-1' 
                    type="date" 
                    name='JoiningDate'
                    value={emp.JoiningDate}
                    onChange={handleChange}
                />
            </div>
            </div>
            <span className="text-danger">{errors.JoiningDate}</span>
            <div className="d-flex">
            <div className='col-sm-1'>
                <label className='form-label m-1'  htmlFor="department">Department</label>
            </div>
            <div>
                <select name="Department" value={emp.Department} className="form-select-sm my-1 ms-1" id="Department" onChange={handleChange}>
                    <option value="0">--Select--</option>
                    <option value="Dotnet">Dotnet</option>
                    <option value="Node/React">Node/React</option>
                    <option value="PHP">PHP</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Sales">Sales</option>
                </select>
            </div>
            </div>
            <span className="text-danger">{errors.Department}</span>
            <div style={{display: showBtn ? 'block' : 'hidden'}} >
                <input type="submit" value="submit" className='btn btn-outline-primary my-2' disabled={isValid}/>
            </div>
            </form>
            <div>
            <button onClick={update.bind(this, emp)} className="btn btn-outline-secondary ms-3">Update</button>

            </div>

            
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

                {data.map((d,index)=> {return (
                    <tr key={index}>
                        <td>{d.Id}</td>
                        <td>{d.Name}</td>
                        <td>{d.Email}</td>
                        <td>{d.Gender}</td>
                        <td>{d.PhoneNumber}</td>
                        <td>{d.Skills + ','}</td>
                        {/* <td>{d.Skills.length > 0 ? d.Skills.join(", ") : d.Skills + ','}</td> */}
                        <td>{d.Department}</td>
                        <td>{d.JoiningDate}</td>
                        <td>
                            <button onClick={edit.bind(this, d)} className="btn btn-outline-primary">Edit</button>
                        </td>
                        <td>
                            <button onClick={deleteEmp.bind(this, d)} className="btn btn-outline-primary">Delete</button>
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