import { useEffect, useState } from "react";
import CustomerService from "../Services/customerService"
import {Link, useNavigate} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
export default function Customer(){

    const customerservice = new CustomerService();
    const [customerArr, setCustomerArr] = useState([]);

    const navigate = useNavigate();
    async function getCustomers(){
        await customerservice.getCustomerList().then((res)=>{
                console.log(res.data);
                setCustomerArr(res.data);
        }).catch((err)=>{
            if(err.response.status === 403){
                // alert(err.response.data.message);
                // alert('Redirecting to login page.')
                navigate('/login');
            }else if(err.response.status === 404){
                alert(err.response.data.message.message)
            }
        });
    }

    useEffect(()=>{
        getCustomers();
    }, []);

    return (
        <div>
            {/* Action */}
            <section id="sections" className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to='/customer/addCustomer' className="text-decoration-none btn btn-primary" >
                                <Icon.PlusLg></Icon.PlusLg> 
                                Add Customer
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* customerlist */}
            <section id="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Customers</h4>
                                </div>
                                <div className="card-body overflow-scroll" style={{height:'500px'}}>
                                <table className="table table-responsive table-striped col-md-9">
                                    <caption className="caption-top"></caption>
                                    <thead className="thead-inverse table-responsive ">
                                        <tr className="">
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phonenumber</th> 
                                            {/* <th>Gender</th>
                                            <th>Birthdate</th> 
                                            <th>Address</th>
                                            <th>Addresstype</th> */}
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {customerArr.map((val, index)=>{
                                            return (
                                                <tr key={val.customerid} >
                                                    <td>{index+1}</td>                      
                                                    <td>{val.customername}</td>                      
                                                    <td>{val.emailaddress}</td>                      
                                                    <td>{val.phonenumber}</td>                      
                                                    {/* <td>{val.gender}</td>                      
                                                    <td>{val.birthdate.toString().slice(0,10)}</td> */}
                                                    {/* <td>{val.birthdate.toString()}</td> */}
                                                    {/* <td>{val.streetaddress}</td>                      
                                                    <td>{val.addresstype}</td> */}
                                                    <td><Link to={`/customer/editCustomer/${val.customerid}`} className="text-decoration-none" > <Icon.List></Icon.List>  Details</Link></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card text-center bg-primary text-white mb-3">
                                <div className="card-body">
                                    <h3>Customers</h3>
                                    <h1 className="display-4">
                                        {/* <em className="fa fa-pencil me-lg-1"></em> */}
                                        <Icon.People></Icon.People>
                                        {customerArr.length}
                                    </h1>
                                    <a href="/" className="btn btn-outline-light btn-sm">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        </div>
    )
}