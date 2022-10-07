import axios from 'axios';
import React from 'react';
import apiUrl from '../api'


export default class CustomerService extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            token : ""
        }
        this.headers = {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin' : true,
            Authorization:localStorage.getItem('jwt')
        }
        this.getCustomerList = this.getCustomerList.bind(this);
        this.GetCustomerById = this.GetCustomerById.bind(this);
        this.UpdateCustomer = this.UpdateCustomer.bind(this);
        this.DeleteCustomer = this.DeleteCustomer.bind(this);
        // this.setToken = this.setToken.bind(this);
    }

    // setToken(){
    //     return this.setState({token: localStorage.getItem('jwt')});
    // }
    
    async getCustomerList(){
        // this.setState({token: localStorage.getItem('jwt')});
        // console.log('local token', localStorage.getItem('jwt'));
        // console.log('tokennnnnn', this.state.token);
        const customerList = await axios.get(apiUrl+'customer', 
        { headers: this.headers });
        return customerList;
    }


    async GetCustomerById(id){
        const customer = await axios.get(apiUrl+`customer/${id}`, { headers: this.headers } )
        return customer.data;
    }
    async UpdateCustomer(id, obj){
        const customer = await axios.put(apiUrl+`customer/update/${id}`, obj, { headers: this.headers } )
        return customer;
    }
    async DeleteCustomer(id){
        return await axios.delete(apiUrl+`customer/del/${id}`, { headers: this.headers })
    }
}