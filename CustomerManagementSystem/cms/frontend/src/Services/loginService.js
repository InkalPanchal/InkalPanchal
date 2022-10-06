import axios from 'axios'
import apiUrl from '../api'
import React from 'react'

class loginService extends React.Component{
    async login(obj){
        const value = await axios.post(apiUrl + 'login', obj, { headers: 'Content-Type: application/json'});
        console.log(value);
        return value;
    }
}
export default loginService;