// component component

import axios from 'axios'
import apiUrl from '../../api';
import { useState, useEffect } from 'react';
import AuthHeader from './../../Services/auth-header';
import { useNavigate } from 'react-router-dom';

const url = apiUrl.apiUrl;

export default function Data(){
    const [userObj, setUserObj] = useState({
        page: 0,
        per_page: 0,
        totalrecord: 0,
        total_pages: 0,
        data:[]
    });
    const [searchParams, setSearchParams] = useState(1);
    
    const headers = AuthHeader();
    let navigate = useNavigate();
    async function getAllUser(){
        if(!localStorage.getItem("user")){
            // alert("Login first")
            navigate('/login')
        }
        await axios.get(`${url}users`, {params:{'page':searchParams}, headers: headers, observe: 'response'} )
        .then((res)=>{ 
            setUserObj(res.data);
        }
        )}
    
    useEffect(() => {
        getAllUser();
      },[]);

    function submit(e){
        e.preventDefault()
        getAllUser();

    }
    function handleChange(e){  
        setSearchParams(e.target.value)
    }
    return (
        <div>
            <nav className="navbar">
                <div>
                    <form onSubmit={submit}>

                    <label htmlFor="search">Search:</label>
                    <input 
                        type="text"
                        className='form-control-sm mx-2'    
                        placeholder='Enter page number'
                        value={searchParams}
                        onChange={handleChange}    
            
                    />
                    <input type="submit" value="submit" className='btn btn-primary mx-2' />
                    </form>
                </div>
            </nav>
            <div className='card p-2 m-2'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userObj.data.map((user, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td><img src={user.profilepicture} width='100' height='100' alt="profile" /></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
    
}

