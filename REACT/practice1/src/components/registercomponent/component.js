// component component
import { useState } from 'react';
import authService from '../../Services/auth-service';

export default function Registeration(){
    const [regUserObj, setRegUserObj] = useState({
        name:"",
        email:"",
        password:""
    });

    function handleSubmit(e){
        e.preventDefault();
        debugger
        authService.Register(regUserObj);
    }
    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value;

        setRegUserObj((prev)=>{
            return {...prev, [name]:value}
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label htmlFor="name" className='form-label'>Name:</label>
                    <input type="text"  
                           className='form-control'
                           name='name'
                           value={regUserObj.name}
                           onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input type="email"  
                        className='form-control'
                        name='email'
                        value={regUserObj.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password" className='form-label'>Password:</label>
                    <input type="password"  
                           className='form-control'
                           name='password'
                           value={regUserObj.password}
                           onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='btn btn-outline-primary' type='submit'>Register</button>
                </div>
            </form>
        </div>
    )
}