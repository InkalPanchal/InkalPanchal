import axios from 'axios'
import React from 'react';
import apiUrl from '../api';
const APIUrl = apiUrl.apiUrl + 'authaccount/';

class AuthService extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            token: "",
        }
        this.Register = this.Register.bind(this);
        this.login = this.login.bind(this);
        this.logOut = this.logOut.bind(this);
        this.getCurrentUser = this.getCurrentUser.bind(this);

    }
    async Register(obj){
        debugger
        const res = await axios.post(`${APIUrl}registration`, obj , 
                                { headers: { 'Content-Type': 'application/json'}});
        if (res.data.token) {
            this.setState({ token: res.data.Token });
            console.log(this.state.token);
        }
        return res.data;
    }
    async login(obj){
        
        const res = await axios.post(`${APIUrl}login`, obj,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.state.token}`,
                },
                observe:'response'
            });
        if (res.data.data.Token) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }else {
            console.log(res.data);
        }
        return res.data;
        
    }
    logOut(){
        localStorage.removeItem("user");
    }


    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
    
}

export default new AuthService();