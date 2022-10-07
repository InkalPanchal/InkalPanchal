import { useState, useEffect } from 'react'
import {format} from 'date-fns'
import * as Icon from 'react-bootstrap-icons'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CustomerService from '../Services/customerService'


export default function AddCustomer() {

    const customerService = new CustomerService();
    let params = useParams()
    let navigate = useNavigate();
    // let location = useLocation();
    const [customerObj, setCustomerObj] = useState({
        // customername:"",
        // emailaddress:"",
        // phonenumber:"",
        // gender:"",
        // birthdate:"",
        // streetaddress:"",
        // city:"",
        // state:"",
        // country:"",
        // pincode:"",
        // addresstype:""
    })
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
    })

    useEffect(()=>{
        customerService.GetCustomerById(parseInt(params.id)).then((res)=>{
            
            console.log(res);
            const {customername, emailaddress, phonenumber, gender, birthdate, streetaddress, city, state, country, pincode, addresstype} = res;
            setCustomerObj({...customerObj, customername:customername, emailaddress:emailaddress, phonenumber:phonenumber, gender:gender, birthdate:format(new Date(birthdate), 'yyyy-MM-dd'), streetaddress:streetaddress, city:city, state:state, country:country, pincode:pincode, addresstype:addresstype})
            console.log('customerObj',customerObj);
        })
    }, [])

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
        const {name, value} = e.target
        console.log(e.target.value);
        setErrObj((prev)=>{return {...prev, [name]:validate(name, value)}});
        setCustomerObj((prev)=>{return {...prev, [name]:value}});
    }

    function update(){
        const customer = customerObj;
        customerService.UpdateCustomer(parseInt(params.id), customer).then((res)=>{
            console.log("updated");
            console.log('update res', res);
            alert("Upadted Successfully.")
        }).catch((err)=>{
            if(err.response.status === 404){
                err.response.data.error.map((val)=>{
                    setErrObj((prev)=>{return {...prev, [val.param]:val.msg}})
                })
            }
            else{
                alert('err', err.message);
            }
            console.log('update err', err);
            console.log('errObj', errObj);
        })
    }
    function handleDelete(){
        customerService.DeleteCustomer(parseInt(params.id)).then(()=>{
            console.log("delete");
            alert("Delete data successfully!")
            navigate('/customer');
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
                        <div className="col-md-3 ms-auto text-end">
                            <button className='btn btn-outline-danger px-4' onClick={handleDelete}>Delete Customer</button>
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
                                    <h4>Edit Customer details</h4>
                                </div>
                                <div className="card-body overflow-scroll" style={{height: '500px'}}>
                                    <form>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="title">CustomerName</label>
                                            <input type="text" name='customername' value={customerObj.customername} className="form-control" onChange={(e)=>handleChange(e)}/>
                                        </div> 
                                        <p className="text-danger">{errObj.customername}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="email">Email Address</label>
                                            <input onChange={(e)=>handleChange(e)} type="email" name='emailaddress' value={customerObj.emailaddress} className="form-control" />
                                        </div> 
                                        <p className="text-danger">{errObj.emailaddress}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="phonenumber">Phonenumber</label>
                                            <input onChange={(e)=>handleChange(e)} type="number" name='phonenumber' value={customerObj.phonenumber} className="form-control" minLength='10' maxLength='10' />
                                        </div> 
                                        <p className="text-danger">{errObj.phonenumber}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="gender">Gender:</label>
                                            <div>
                                                <input onChange={(e)=>handleChange(e)} type="radio" name='gender' value="Male" checked={customerObj.gender === 'Male'} className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold"   htmlFor="male">Male</label>
                                            </div>

                                            <div>
                                                <input onChange={(e)=>handleChange(e)} type="radio" name='gender' value="Female" checked={customerObj.gender === 'Female'} className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold"  htmlFor="female">Female</label>
                                            </div>

                                            <div>
                                                <input onChange={(e)=>handleChange(e)} type="radio" name='gender' value="Other" checked={customerObj.gender === 'Other'} className="form-check-input mx-2" />
                                                <label className="form-label fw-semibold" htmlFor="other">Other</label>
                                            </div>
                                        </div> 
                                        <p className="text-danger">{errObj.gender}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-semibold" htmlFor="dob">BirthDate</label>
                                            
                                            <input onChange={(e)=>handleChange(e)} type="date" value={customerObj.birthdate} name='birthdate' className="form-control" />
                                        </div>
                                        <p className="text-danger">{errObj.birthdate}</p>
                                        <div className="form-group my-3">
                                            <label className="form-label fw-bold" htmlFor="address" >Address</label><br />
                                            {/* <input onChange={(e)=>handleChange(e)} type="text" className="form-control" /> */}

                                            <div>
                                                <label className="form-label fw-semibold" htmlFor="street">Street Address</label>    
                                                <input onChange={(e)=>handleChange(e)} type="text" value={customerObj.streetaddress} name='streetaddress' className='form-control' />
                                            </div>

                                            <div className="row row-cols-3 my-3">
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="pincode">Pincode</label>
                                                    <input  type="number" className='form-control' name='pincode' value={customerObj.pincode} minLength={6} maxLength={6} onChange={(e)=>handleChange(e)} />
                                                </div>
                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="city">City</label>
                                                    <select name="city" id="" className='form-select rounded' value={customerObj.city} onChange={(e)=>handleChange(e)} >
                                                        <option value="0">Select</option>
                                                        <option value="Ahmedabad">Ahmedabad</option>
                                                        <option value="Vadodara">Vadodara</option>
                                                        <option value="Dakor">Dakor</option>
                                                    </select>
                                                </div>

                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="state">State</label>
                                                    <select name="state" id="" className='form-select rounded' value={customerObj.state} onChange={(e)=>handleChange(e)} >
                                                        <option value="0">Select</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Rajasthan">Rajasthan</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                    </select>
                                                </div>

                                                <div className='col-sm-3'>
                                                    <label className="form-label fw-semibold" htmlFor="country">Country</label>
                                                    <select name="country" id="" className='form-select rounded' value={customerObj.country} onChange={(e)=>handleChange(e)} >
                                                        <option value="0">Select</option>
                                                        <option value="India">India</option>
                                                        <option value="USA">USA</option>
                                                        <option value="UK">UK</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-danger">{errObj.pincode}</p>
                                        <p className="text-danger">{errObj.streetaddress}</p>
                                        <p className="text-danger">{errObj.city}</p>
                                        <p className="text-danger">{errObj.state}</p>
                                        <p className="text-danger">{errObj.country}</p>
                                        <div className="form-group my-3 ">
                                            <label className="form-label fw-semibold" htmlFor="addresstype">AddressType:</label>

                                           <div className='d-flex'>
                                            <div className='mx-2'>
                                                    <input onChange={(e)=>handleChange(e)} type="radio" value='Home' checked={customerObj.addresstype === 'Home'} className="form-check-input mx-1" name='addresstype' />
                                                    <label className="form-label fw-semibold"  htmlFor="Home">Home</label>
                                                </div>

                                                <div className='mx-2'>
                                                    <input onChange={(e)=>handleChange(e)} type="radio" value='Office' checked={customerObj.addresstype === 'Office'} className="form-check-input mx-1" name='addresstype' />
                                                    <label className="form-label fw-semibold" htmlFor="Office">Office</label>
                                                </div>
                                           </div>
                                        </div>   
                                        <p className="text-danger">{errObj.addresstype}</p>

                                        <div className="col-md-3 ms-auto text-end">
                                            {/* <a href="/" className="btn btn-success" type='submit' >
                                                <Icon.CheckLg></Icon.CheckLg> Add Customer
                                            </a> */}

                                            <button className="btn btn-success" type='button' onClick={update}><Icon.CheckLg></Icon.CheckLg>Update detail</button>
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
//     function (e)=>handleChange(e)(){}
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
//                                     <input onChange={(e)=>handleChange(e)} type="text" name='customername' className="form-control" />
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="email">Email Address</label>
//                                     <input onChange={(e)=>handleChange(e)} type="email" name='emailaddress' className="form-control" />
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="phonenumber">Phonenumber</label>
//                                     <input onChange={(e)=>handleChange(e)} type="number" name='phonenumber' className="form-control" minLength='10' maxLength='10' />
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="gender">Gender:</label>
//                                     <div>
//                                         <input onChange={(e)=>handleChange(e)} type="radio" name='gender' value='Male' className="form-check-input mx-2" />
//                                         <label className="form-label fw-semibold" htmlFor="male">Male</label>
//                                     </div>
//                                     <div>
//                                         <input onChange={(e)=>handleChange(e)} type="radio" name='gender' value='Female' className="form-check-input mx-2" />
//                                         <label className="form-label fw-semibold" htmlFor="female">Female</label>
//                                     </div>
//                                     <div>
//                                         <input onChange={(e)=>handleChange(e)} type="radio" name='gender' value='Other' className="form-check-input mx-2" />
//                                         <label className="form-label fw-semibold" htmlFor="other">Other</label>
//                                     </div>
//                                 </div> 
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-semibold" htmlFor="dob">BirthDate</label>
//                                     <input onChange={(e)=>handleChange(e)} type="date" name='birthdate' className="form-control" />
//                                 </div>
//                                 <div className="form-group my-3">
//                                     <label className="form-label fw-bold" htmlFor="address" >Address</label><br />
//                                     {/* <input onChange={(e)=>handleChange(e)} type="text" className="form-control" /> */}
//                                     <div>
//                                         <label className="form-label fw-semibold" htmlFor="street">Street Address</label>    
//                                         <input onChange={(e)=>handleChange(e)} type="text" name='streetaddress' className='form-control' />
//                                     </div>
//                                     <div className="row row-cols-3 my-3">
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="pincode">Pincode</label>
//                                             <input  type="number" className='form-control' name='pincode' minLength={6} maxLength={6} onChange={(e)=>handleChange(e)} />
//                                         </div>
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="city">City</label>
//                                             <select name="city" id="" className='form-select rounded' onChange={(e)=>handleChange(e)} >
//                                                 <option value="0">Select</option>
//                                                 <option value="Ahmedabad">Ahmedabad</option>
//                                                 <option value="Vadodara">Vadodara</option>
//                                                 <option value="Dakor">Dakor</option>
//                                             </select>
//                                         </div>
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="state">State</label>
//                                             <select name="state" id="" className='form-select rounded' onChange={(e)=>handleChange(e)} >
//                                                 <option value="0">Select</option>
//                                                 <option value="Gujarat">Gujarat</option>
//                                                 <option value="Rajasthan">Rajasthan</option>
//                                                 <option value="Maharashtra">Maharashtra</option>
//                                             </select>
//                                         </div>
//                                         <div className='col-sm-3'>
//                                             <label className="form-label fw-semibold" htmlFor="country">Country</label>
//                                             <select name="country" id="" className='form-select rounded' onChange={(e)=>handleChange(e)} >
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
//                                             <input onChange={(e)=>handleChange(e)} type="radio" value='Home' className="form-check-input mx-1" name='addresstype' />
//                                             <label className="form-label fw-semibold" htmlFor="Home">Home</label>
//                                         </div>
//                                         <div className='mx-2'>
//                                             <input onChange={(e)=>handleChange(e)} type="radio" value='Office' className="form-check-input mx-1" name='addresstype' />
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
