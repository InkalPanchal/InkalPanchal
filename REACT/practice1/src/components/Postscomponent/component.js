// component component
import axios from 'axios'
import { useState, useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useSearchParams } from 'react-router-dom';
import HostUrl from '../../api'

const hostUrl = HostUrl.hostUrl;
const token = "7431990a4f109f43cfbdfa7a05a8a99e5ffb9794e7aeb5b46a8331270d7cd554";

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
};

export default function Posts(){
    const [posts, setPosts] = useState([]);

    const [postObj, setpostObj] = useState({
        user_id:0,
        title: "",
        body: "",
    });
    const [searchParams, setSearchParams] = useSearchParams();
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setpostObj((prev)=>{
            return {...prev, [name]:value}
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        createPost();
    }
    useEffect(()=>{
        getPosts();
    }, []);

    async function getPosts(){
        await axios.get(hostUrl, {headers}).then((response)=>{ setPosts(response.data); console.log(response.data);});
    }

    async function createPost(){
        let post = postObj
        await axios.post(hostUrl, post, { headers})
        await getPosts();  
    }
    async function editPost(item){
        setpostObj(()=>{return item})
    }
    async function updatePost(){
        let post = postObj;
        await axios.put(`${hostUrl}/${postObj.id}`, post, {headers}).then((res)=>console.log(res.data));
        clear()
        getPosts();
    }

    async function deletePost(id){
        await axios.delete(`${hostUrl}/${id}`, { headers }).then(()=>console.log("data deleted."));
        getPosts();
    }
    function clear(){
        setpostObj({
            user_id:"",
            title:"",
            body:""
        });
    }
    return(
        <div>
            <div>
                <form className='form my-2' onSubmit={handleSubmit}>
                    <div className='d-flex'>
                        <div>
                            <label className='mx-2' htmlFor="user_id">Id:</label>
                            <input className='mx-2' type="number" name='user_id' value={postObj.user_id} onChange={handleChange} />
                        </div>
                        <div>
                            <label className='mx-2' htmlFor="title">Title:</label>
                            <input className='mx-2' type="text" name='title' value={postObj.title} onChange={handleChange} />
                        </div>
                        <div>
                            <label className='mx-2' htmlFor="body">Body:</label>
                            <input className='mx-2' type="text" name='body' value={postObj.body} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='m-2'>
                        <button type="submit" className='btn btn-outline-primary me-2 px-3'>Add Post</button>
                        <button type='button' className='btn btn-outline-success' onClick={()=>{return updatePost()}}>Update Post</button>
                    </div>
                </form>
                    
            </div>
            <div>
                <nav className="navbar">
                    <div>
                        <label htmlFor="search form-label">Search:</label>
                        <input 
                            type="text" 
                            className='form-control-sm mx-2' 
                            placeholder='Enter title or body to search:' 
                            value={searchParams.get("filter") || ""}
                            onChange={(e)=>{let filter = e.target.value;
                                            if(filter){
                                                setSearchParams({filter});
                                            }else {
                                                setSearchParams({});
                                            }
                            }}    
                        />
                    </div>
                </nav>
            </div>
            <table className='table table-striped table-responsive text-center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {posts ? (posts.filter((post)=>{
                    let filter = searchParams.get('filter');
                    if(!filter) return true;
                    let title = post.title.toLowerCase();
                    return (title.startsWith(filter.toLowerCase()) || post.body.toLowerCase().startsWith(filter.toLowerCase()));
                })
                .map((post, index)=> {
                    return (
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.user_id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td><Icon.Pencil onClick={()=>(editPost(post))} style={{cursor:'pointer'}}></Icon.Pencil></td>
                        <td><Icon.ClipboardXFill onClick={()=>(deletePost(post.id))} style={{cursor:'pointer'}}></Icon.ClipboardXFill></td>
                    </tr>)
                }
                )): (<p>No Data</p>)}
                
                </tbody>
            </table>
           
        </div>
    )
}