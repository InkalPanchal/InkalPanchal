import { useState, useEffect } from 'react'
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons'
import { Link, useLocation, useParams } from 'react-router-dom'
import CustomerService from '../Services/customerService'
import apiUrl from '../api'

export default function AddCustomer() {

    const customerService = new CustomerService();
    let params = useParams()
    // let location = useLocation();
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

    
    async function getCustomer(){
        customerService.GetCustomerById(parseInt(params.id)).then(async (response)=>{
            console.log('response', response);
            const {customername, emailaddress, phonenumber, gender, birthdate, streetaddress, city, state, country, pincode, addresstype} = await  response;
            setCustomerObj({...customerObj, customername:customername, emailaddress:emailaddress, phonenumber:phonenumber, gender:gender, birthdate:birthdate, streetaddress:streetaddress, city:city, state:state, country:country, pincode:pincode, addresstype:addresstype})
            // console.log('customerobj', await customerObj);
        })
    }

    useEffect(()=>{
        getCustomer();
        // customer.then((res)=>{
        //     console.log(res, 'res');
        // })
        // console.log(getCustomer().then((res)=>{console.log(res);}));
        // customer.then((res)=>{return res})
        // console.log(customer, 'getcustomer()');
        // setCustomerObj({...customerObj, customername:customer.customername })
    }, []);

    function handleChange(){}
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
                                <div className="card-body overflow-scroll" style={{height: '500px'}}>
                                    <form >
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="title">CustomerName</label>
                                            <input onChange={handleChange} type="text" name='customername' value={customerObj.customername} className="form-control" />
                                        </div> 
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="email">Email Address</label>
                                            <input onChange={handleChange} type="email" name='emailaddress' value={customerObj.emailaddress} className="form-control" />
                                        </div> 
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="phonenumber">Phonenumber</label>
                                            <input onChange={handleChange} type="number" name='phonenumber' value={customerObj.phonenumber} className="form-control" minLength='10' maxLength='10' />
                                        </div> 
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="gender">Gender:</label>
                                            <div>
                                                <input onChange={handleChange} type="radio" name='gender' value='Male' className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" value={customerObj.gender} htmlFor="male">Male</label>
                                            </div>

                                            <div>
                                                <input onChange={handleChange} type="radio" name='gender' value='Female' className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" value={customerObj.gender} htmlFor="female">Female</label>
                                            </div>

                                            <div>
                                                <input onChange={handleChange} type="radio" name='gender' value='Other' className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" value={customerObj.gender} htmlFor="other">Other</label>
                                            </div>
                                        </div> 
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="dob">BirthDate</label>
                                            <input onChange={handleChange} type="date" value={customerObj.birthdate} name='birthdate' className="form-control" />
                                        </div>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-bold" htmlFor="address" >Address</label><br />
                                            {/* <input onChange={handleChange} type="text" className="form-control" /> */}

                                            <div>
                                                <label className="form-label fw-semibold" htmlFor="street">Street Address</label>    
                                                <input onChange={handleChange} type="text" value={customerObj.streetaddress} name='streetaddress' className='form-control' />
                                            </div>

                                            <div className="row row-cols-3 my-3">
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="pincode">Pincode</label>
                                                    <input  type="number" className='form-control' name='pincode' value={customerObj.pincode} minLength={6} maxLength={6} onChange={handleChange} />
                                                </div>
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="city">City</label>
                                                    <select name="city" id="" className='form-select rounded' value={customerObj.city} onChange={handleChange} >
                                                        <option value="0">Select</option>
                                                        <option value="Ahmedabad">Ahmedabad</option>
                                                        <option value="Vadodara">Vadodara</option>
                                                        <option value="Dakor">Dakor</option>
                                                    </select>
                                                </div>

                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="state">State</label>
                                                    <select name="state" id="" className='form-select rounded' value={customerObj.state} onChange={handleChange} >
                                                        <option value="0">Select</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Rajasthan">Rajasthan</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                    </select>
                                                </div>

                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="country">Country</label>
                                                    <select name="country" id="" className='form-select rounded' value={customerObj.country} onChange={handleChange} >
                                                        <option value="0">Select</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group my-3 ">
                                            <label className="form-label fw-semibold" htmlFor="addresstype">AddressType:</label>

                                           <div className='d-flex'>
                                            <div className='mx-2'>
                                                    <input onChange={handleChange} type="radio" value={customerObj.addresstype} className="form-check-input mx-1" name='addresstype' />
                                                    <label className="form-label fw-semibold"  htmlFor="Home">Home</label>
                                                </div>

                                                <div className='mx-2'>
                                                    <input onChange={handleChange} type="radio" value={customerObj.addresstype} className="form-check-input mx-1" name='addresstype' />
                                                    <label className="form-label fw-semibold" htmlFor="Office">Office</label>
                                                </div>
                                           </div>
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
































// import {ReactDialogBox} from 'react-js-dialog-box';
// import { useState } from 'react';
// import * as Icon from 'react-bootstrap-icons'
// import { useEffect } from 'react';
// export default function EditCustomer(){

//     const [isOpen, setIsOpen] = useState(false)

//     function openBox(){
//         setIsOpen(true);
//     }

//     function closeBox(){
//         setIsOpen(false);
//     }

//     function handleSubmit(){}
//     function handleChange(){}
//     return (
//         <div>
//            <button onClick={openBox}>Open Modal</button>
//            {isOpen && (
//             <div className='m-5 card-header'>
//                 <ReactDialogBox
//                     closeBox={closeBox}
//                     modalWidth='100%'
//                     modalHeight='100%'
//                     headerBackgroundColor='blue'
//                     headerTextColor='white'
//                     headerHeight='50'
//                     closeButtonColor='black'
//                     bodyBackgroundColor='white'
//                     bodyTextColor='black'
//                     bodyHeight='200px'
//                     headerText='Title'
//                     bodyPadding='100px'
                    
//                 >
//                     <div className='card'>
//                         <div className="card-body" style={{height: '100%'}}>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="title">CustomerName</label>
//                                     <input onChange={handleChange} type="text" name='customername' className="form-control" />
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="email">Email Address</label>
//                                     <input onChange={handleChange} type="email" name='emailaddress' className="form-control" />
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="phonenumber">Phonenumber</label>
//                                     <input onChange={handleChange} type="number" name='phonenumber' className="form-control" minLength='10' maxLength='10' />
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="gender">Gender:</label>
//                                     <div>
//                                         <input onChange={handleChange} type="radio" name='gender' value='Male' className="form-check-input mx-2" />
//                                         <label className="form-label fw-semibold" htmlFor="male">Male</label>
//                                     </div>
//                                     <div>
//                                         <input onChange={handleChange} type="radio" name='gender' value='Female' className="form-check-input mx-2" />
//                                         <label className="form-label fw-semibold" htmlFor="female">Female</label>
//                                     </div>
//                                     <div>
//                                         <input onChange={handleChange} type="radio" name='gender' value='Other' className="form-check-input mx-2" />
//                                         <label className="form-label fw-semibold" htmlFor="other">Other</label>
//                                     </div>
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="dob">BirthDate</label>
//                                     <input onChange={handleChange} type="date" name='birthdate' className="form-control" />
//                                 </div>
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-bold" htmlFor="address" >Address</label><br />
//                                     {/* <input onChange={handleChange} type="text" className="form-control" /> */}
//                                     <div>
//                                         <label className="form-label fw-semibold" htmlFor="street">Street Address</label>    
//                                         <input onChange={handleChange} type="text" name='streetaddress' className='form-control' />
//                                     </div>
//                                     <div className="row row-cols-3 my-3">
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="pincode">Pincode</label>
//                                             <input  type="number" className='form-control' name='pincode' minLength={6} maxLength={6} onChange={handleChange} />
//                                         </div>
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="city">City</label>
//                                             <select name="city" id="" className='form-select rounded' onChange={handleChange} >
//                                                 <option value="0">Select</option>
//                                                 <option value="Ahmedabad">Ahmedabad</option>
//                                                 <option value="Vadodara">Vadodara</option>
//                                                 <option value="Dakor">Dakor</option>
//                                             </select>
//                                         </div>
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="state">State</label>
//                                             <select name="state" id="" className='form-select rounded' onChange={handleChange} >
//                                                 <option value="0">Select</option>
//                                                 <option value="Gujarat">Gujarat</option>
//                                                 <option value="Rajasthan">Rajasthan</option>
//                                                 <option value="Maharashtra">Maharashtra</option>
//                                             </select>
//                                         </div>
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="country">Country</label>
//                                             <select name="country" id="" className='form-select rounded' onChange={handleChange} >
//                                                 <option value="0">Select</option>
//                                                 <option value="India">Gujarat</option>
//                                                 <option value="USA">Rajasthan</option>
//                                                 <option value="UK">Maharashtra</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="form-group my-3 ">
//                                     <label className="form-label fw-semibold" htmlFor="addresstype">AddressType:</label>
//                                 <div className='d-flex'>
//                                     <div className='mx-2'>
//                                             <input onChange={handleChange} type="radio" value='Home' className="form-check-input mx-1" name='addresstype' />
//                                             <label className="form-label fw-semibold" htmlFor="Home">Home</label>
//                                         </div>
//                                         <div className='mx-2'>
//                                             <input onChange={handleChange} type="radio" value='Office' className="form-check-input mx-1" name='addresstype' />
//                                             <label className="form-label fw-semibold" htmlFor="Office">Office</label>
//                                         </div>
//                                 </div>
//                                 </div>   
//                                 <div className="col-md-3 ms-auto text-end">
//                                     {/* <a href="/" className="btn btn-success" type='submit' >
//                                         <Icon.CheckLg></Icon.CheckLg> Add Customer
//                                     </a> */}
//                                     <button className="btn btn-success" type='submit'><Icon.CheckLg></Icon.CheckLg> Add Customer</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </ReactDialogBox>
//             </div>
//            )}
//         </div>
//         )
    
// }
