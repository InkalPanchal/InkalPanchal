import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import loginService from '../Services/loginService';
export default function Login() {

    const [userObj, setUserObj] = useState({
        username: "",
        password: ""
    })

    const [objError, setObjError] = useState({
        username: "",
        password: ""
    })

    const [errObj, setErrObj] = useState([])
    const [errMsg, setErrMsg] = useState(" ")
    const [isValid, setIsValid] = useState(true)
    const loginservice = new loginService();

    function validate(name, value) {
        switch (name) {
            case "username":
                if (!value) { return "Username is required" }
                else if (value.length < 3) { return "Username must be 3 characters long." }
                else { return "" }
            case "password":
                if (!value) { return "Password is required" }
                else if (value.length < 8) { return "Password must be at least 8 characters long." }
                else if (!value.match(/[a-z]/g) || !value.match(/[A_Z]/g) || !value.match(/[0-9]/g)) { return "Password should have one small character, capital letter and digit." }
                else { return "" }
            default:
                return ""
        }
    }

    // let [dispErr, setDispErr] = useState(false)
    function handleChange(e) {
        const { name, value } = e.target;

        setObjError((prev) => { return { ...prev, [name]: validate(name, value) } });

        setUserObj((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        loginservice.login(userObj)
            .then((val) => {
                console.log(val.data.token);
                // if(val.status == 200){
                //    <Navigate to='/customer'> </Navigate>
                // }
                localStorage.setItem('jwt', val.data.token);
                if(val.data.token !== undefined) {
                    setIsValid(true);
                    navigate('/customer')
                }else {
                    // setIsValid(false)
                    alert('Pass token');
                }
            })
            .catch((err) => {
                console.log(err);
                setIsValid(false)
                if (err.response.status === 400) {
                    setErrObj(err.response.data.error)
                } else if (err.response.status === 404) {
                    setErrObj("")
                    setErrMsg(err.response.data);
                }
            })
    }

    return (
        <div className='p-5 m-5 login' >
                {/* <div className="h-100 align-middle"> */}
                    {/* <div className=""> */}
                        <div className="w-50 mx-auto border rounded shadow bg-light text-center py-5">
                            <form onSubmit={handleSubmit} className="">
                                <div className="mb-3 mx-auto d-flex">
                                    <label htmlFor="username" className="form-label ms-auto me-3">Username</label>
                                    <input type="text" className="me-auto" name='username' id="username" aria-describedby="username" onChange={handleChange} required />
                                </div>
                                
                                    {/* <label htmlFor="username" className="form-label ">Username</label>
                                    <input type="text" className="form-control-sm " name='username' id="username" aria-describedby="username" onChange={handleChange} required /> */}
                                
                                <p className="text-danger mt-0 pb-1">{objError.username}</p>
                                
                                    <div className="mb-3 mx-auto d-flex">
                                        <label htmlFor="password" className="form-label ms-auto me-4">Password</label>
                                        <input type="password" className="me-auto" name='password' id="password" onChange={handleChange} required />
                                    </div>
                                    
                                        {/* <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control-sm " name='password' id="password" onChange={handleChange} required /> */}
                                    
                                    <p className="text-danger mt-0 pb-1">{objError.password}</p>
                                {/* <br /> */}
                                <button type="submit" className="btn btn-primary px-4">Login</button>
                            </form>
                        </div>
                    {/* </div> */}
                {/* </div> */}

                {isValid ? "" : <div className='mt-2'>
                    {errObj.length !== 0 ?
                        errObj.map((val, index) => {
                            return (<p className='text-danger alert alert-danger' key={index}>{val}</p>)
                        })
                        : <p className='text-danger alert alert-danger'> {errMsg ? errMsg : ""}</p>
                    }
                </div>}

            
        </div>
    )
}