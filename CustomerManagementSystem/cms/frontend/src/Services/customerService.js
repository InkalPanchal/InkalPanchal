import axios from 'axios';
import React from 'react';
import apiUrl from '../api'


export default class CustomerService extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            token : ""
        }

        this.getCustomerList = this.getCustomerList.bind(this);
        // this.addNewCustomer = this.addNewCustomer.bind(this);
        this.setToken = this.setToken.bind(this);
    }

    async getCustomerList(){
        const customerList = await axios.get(apiUrl+'customer', { headers: {'Access-Control-Allow-Origin' : true, 'Content-Type':'application/json' } });
        return customerList;
    }

    setToken(){
        return this.setState({token: localStorage.getItem('jwt')});
    }
    
    
    // async addNewCustomer(customer){
    //     // this.setState({token: localStorage.getItem('token')})
    //     // console.log(this.state.token);
    //     return await axios.post(apiUrl+'customer/add', customer, 
    //             { headers: {
    //                         'Content-Type':'application/json', 
    //                         // 'authorization': `Bearer ${localStorage.getItem('jwt')}` 
    //                         } 
    //             }
    //         ).then((res)=>{
    //             console.log('add res', res.data);
    //         }).catch((err)=>{
    //             console.log('add err', err);
    //         });
    // }

    async GetCustomerById(id){
        const customer = await axios.get(apiUrl+`customer/${id}`, { headers: {'Access-Control-Allow-Origin' : true, 'Content-Type':'application/json' } } )
        return customer.data;
    }
    // async UpdateCustomer(id){
    //     const customer = await axios.put(apiUrl+'customer/update')
    // }
}