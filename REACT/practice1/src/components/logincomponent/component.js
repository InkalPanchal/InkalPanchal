// component component
import { isEmail } from 'validator';    
import { useState } from 'react';
import authService from '../../Services/auth-service';
import { useNavigate } from 'react-router-dom';

const required = value => {
    if(!value){
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        )
    }
}

const email = value =>{
    if(!isEmail(value)){
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        )
    }
}
const password = value =>{
    if(value.length < 6){
        return (
            <div className="alert alert-danger" role="alert">
                Password must be 6 characters long.
            </div>
        )
    }
}

export default function Login(){
    const [userObj, setUserObj] = useState({
        email:"",
        password:""
    })
    let navigate = useNavigate();
    
    function handleSubmit(e){
        e.preventDefault();
        authService.login(userObj)
        .then((res)=>{
            console.log(res.message);
            if(res.message !== 'success'){
                // navigate('/register')
                alert("Invalid email/password");
            }
            else {
                
                alert("Successfully logged in.")
                navigate('/users')

            }
        });
    }
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setUserObj((prev)=>{
            return {...prev, [name]:value}
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                           className="form-control"
                           name="email"
                           value={userObj.email} 
                           onChange={handleChange} 
                           validations={[required, email]}
                    />  
                </div>
                <div className='form-group'>
                    <label htmlFor="password">password:</label>
                    <input type="password" 
                           className="form-control"
                           name="password"
                           value={userObj.password} 
                           onChange={handleChange} 
                           validations={[required, password]}
                    />  
                </div>
                <div>
                    <button className='btn btn-outline-primary btn-block'>Login</button>
                </div>
                {/* <div>
                    <CheckButton style={{display:"none"}} ref={c => this.checkBtn = c}></CheckButton>
                </div> */}
            </form>
        </div>

    )
}