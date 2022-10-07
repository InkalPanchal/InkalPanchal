import { useState } from 'react'
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

import apiUrl from '../api'

export default function AddCustomer() {

    // const [Address, setAddress] = useState({
    //     streetaddress:"",
    //     pincode:"",
    //     city:"",
    //     state:"",
    //     country:""
    // });
    
    const [customerObj, setCustomerObj] = useState({
        customername:"",
        emailaddress:"",
        phonenumber:"",
        gender:"",
        birthdate:"",
        streetaddress:"",
        city:"",
        state:"",
        country:"",
        pincode:"",
        addresstype:""
    })

    
    
    // function handleAddress(e){
    //     const {name, value} = e.target;
    //     console.log(e.target.value);
    //     setAddress((prev)=>{return {...prev, [name]:value}})
    // }

    const [errMsg, setErrMsg] = useState("")

    const [errObj, setErrObj] = useState({
        customername:"",
        emailaddress:"",
        phonenumber:"",
        gender:"",
        birthdate:"",
        streetaddress:"",
        city:"",
        state:"",
        country:"",
        pincode:"",
        addresstype:""
    });

    function validate(name, value) {
        switch (name) {
            case "customername":
                if (!value) { return "Customername is required" }
                else if (value.length < 3) { return "Name must be 3 characters long." }
                else { return "" }
            case "emailaddress":
                if (!value) { return "EmailAddress is required" }
                else if (!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/g)) { return "Enter valid email." }
                else { return "" }
            case "phonenumber":
                if (!value) { return "Phonenumber is required" }
                else if (value.length < 10) { return "Enter 10 digits number." }
                else { return "" }
            case "gender":
                if (!value) { return "Gender is required" }
                else { return "" }
            case "birthdate":
                if (!value) { return "Birthdate is required" }
                else { return "" }
            case "streetaddress":
                if (!value) { return "Streetaddress is required" }
                else { return "" }
            case "city":
                if (!value) { return "City is required" }
                else { return "" }
            case "state":
                if (!value) { return "State is required" }
                else { return "" }
            case "country":
                if (!value) { return "Country is required" }
                else { return "" }
            case "pincode":
                if (!value) { return "Pincode is required" }
                else if (value.length < 6) { return "Enter 6 digits pincode." }
                else { return "" }
            case "addresstype":
                if (!value) { return "Addresstype is required" }
                else { return "" }
            default:
                return ""
        }
    }

    function handleChange(e){
        const {name, value} = e.target;
        console.log(e.target.value);
        validate(name, value);
        setErrObj((prev)=>{return {...prev, [name]: validate(name, value)}})
        setCustomerObj((prev)=>{return {...prev, [name]:value}});
        
    }
    async function handleSubmit(e) {
        e.preventDefault();


        // console.log("Address", Address);
        // console.log('customer', customerObj);
        // await customerService.addNewCustomer(customerObj).then((res)=>{
        //     console.log('res', res);
        // });
        return await axios.post(apiUrl+'customer/add', customerObj, { headers: {'Access-Control-Allow-Origin' : true, 'Content-Type':'application/json' } })
            .then((res)=>{
                console.log('add res', res);
                alert("New Customer added.");
                setCustomerObj({})
                e.target.reset();
            })
            .catch((err)=>{
                if(err.response.status === 422){
                    alert('Data already exists.')
                }else if(err.response.status === 404){
                    // alert(err.response.data.error.map((val)=>{
                    //     return val.param
                    // }))
                    let errr ;
                    err.response.data.error.map((val)=>{
                        console.log(val);
                        errr = val;
                    })
                    console.log('errr', errr);
                    // console.log(value.map());
                    setErrObj((prev)=>{
                        return {...prev, [errr.param]:errr.msg}
                    });
                    console.log('errObj', errObj);
                    
                    
                }else {
                    console.log('add err', err);
                    setErrMsg(err.message)
                }
            })

    }

    return (
        <div>
            {/* <!--Actions--> */}
            <section id="sections" className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 ">
                            <Link to='/customer' className="btn btn-light">
                                <Icon.ArrowLeft></Icon.ArrowLeft> Back to Dashboard
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Posts */}
            <section id="">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card" >
                                <div className="card-header">
                                    <h4>Add Customer</h4>
                                </div>
                                <p className='text-danger'>{errMsg !== undefined ? errMsg : ""}</p>
                                {/* <div>{errObj !== undefined ? {errObj} : ""}</div> */}
                                <div className="card-body overflow-scroll" style={{height: '500px'}}>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="title">CustomerName</label>
                                            <input onChange={handleChange} type="text" name='customername' className="form-control" required/>
                                        </div> 
                                        <p className="text-danger">{errObj.customername}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="email">Email Address</label>
                                            <input onChange={handleChange} type="email" name='emailaddress' className="form-control" required/>
                                        </div> 
                                        <p className="text-danger">{errObj.emailaddress}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="phonenumber">Phonenumber</label>
                                            <input onChange={handleChange} type="number" name='phonenumber' className="form-control" minLength='10' maxLength='10' required />
                                        </div> 
                                        <p className="text-danger">{errObj.phonenumber}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="gender">Gender:</label>
                                            <div>
                                                <input onChange={handleChange} type="radio" name='gender'  value='Male' className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" htmlFor="male" >Male</label>
                                            </div>

                                            <div>
                                                <input onChange={handleChange} type="radio" name='gender' value='Female'  className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" htmlFor="female">Female</label>
                                            </div>

                                            <div>
                                                <input onChange={handleChange} type="radio" name='gender' value='Other' className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" htmlFor="other">Other</label>
                                            </div>
                                            <p className="text-danger">{errObj.gender}</p>
                                        </div> 
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="dob">BirthDate</label>
                                            <input onChange={handleChange} type="date" name='birthdate' className="form-control" />
                                        </div>
                                        <p className="text-danger">{errObj.birthdate}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-bold" htmlFor="address" >Address</label><br />
                                            {/* <input onChange={handleChange} type="text" className="form-control" /> */}

                                            <div>
                                                <label className="form-label fw-semibold" htmlFor="street">Street Address</label>    
                                                <input onChange={handleChange} type="text" name='streetaddress' className='form-control' />
                                            </div>
                                            <p className="text-danger">{errObj.streetaddress}</p>
                                            <div className="row row-cols-3 my-3">
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="pincode">Pincode</label>
                                                    <input  type="number" className='form-control' name='pincode' minLength={6} maxLength={6} onChange={handleChange} />
                                                </div>
                                                
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="city">City</label>
                                                    <select name="city" id="" className='form-select rounded' onChange={handleChange} >
                                                        <option value="0">Select</option>
                                                        <option value="Ahmedabad">Ahmedabad</option>
                                                        <option value="Vadodara">Vadodara</option>
                                                        <option value="Dakor">Dakor</option>
                                                    </select>
                                                </div>

                                                

                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="state">State</label>
                                                    <select name="state" id="" className='form-select rounded' onChange={handleChange} >
                                                        <option value="0">Select</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Rajasthan">Rajasthan</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                    </select>
                                                </div>
                                                
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="country">Country</label>
                                                    <select name="country" id="" className='form-select rounded' onChange={handleChange} >
                                                        <option value="0">Select</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                    </select>
                                                </div>
                                            </div>
                                                <p className="text-danger">{errObj.pincode}</p>
                                                <p className="text-danger">{errObj.country}</p>
                                                <p className="text-danger">{errObj.state}</p>
                                                <p className="text-danger">{errObj.city ? errObj.city : ""}</p>
                                            
                                        </div>
                                        <div className="form-group my-3 ">
                                            <label className="form-label fw-semibold" htmlFor="addresstype">AddressType:</label>

                                           <div className='d-flex'>
                                            <div className='mx-2'>
                                                    <input onChange={handleChange} type="radio" value='Home' className="form-check-input mx-1" name='addresstype' />
                                                    <label className="form-label fw-semibold" htmlFor="Home">Home</label>
                                                </div>

                                                <div className='mx-2'>
                                                    <input onChange={handleChange} type="radio" value='Office' className="form-check-input mx-1" name='addresstype' />
                                                    <label className="form-label fw-semibold" htmlFor="Office">Office</label>
                                                </div>
                                           </div>
                                           <p className="text-danger">{errObj.addresstype}</p>
                                        </div>   

                                        <div className="col-md-3 ms-auto text-end">
                                            {/* <a href="/" className="btn btn-success" type='submit' >
                                                <Icon.CheckLg></Icon.CheckLg> Add Customer
                                            </a> */}

                                            <button className="btn btn-success" type='submit'><Icon.CheckLg></Icon.CheckLg> Add Customer</button>
                                        </div>
                                    </form>
                                   
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}