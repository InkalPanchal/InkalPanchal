// component component
import axios from 'axios'
import { useState, useEffect } from 'react';

const hostUrl = "https://gorest.co.in/public/v2/posts";
const token = "7431990a4f109f43cfbdfa7a05a8a99e5ffb9794e7aeb5b46a8331270d7cd554";

const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
};

export default function Posts(){
    const [posts, setPosts] = useState([]);

    const [postObj, setpostObj] = useState({
        user:"",
        user_id:0,
        title: "",
        body: "",
    });

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
    // function getById(id){
    //     axios.get(`${hostUrl}/${id}`, {headers}).then((res)=>{setpostObj(res.data)});
    // }

    async function editPost(item){
        
    }
    async function updatePost(){
        let post = postObj;
        await axios.put(hostUrl, post, {headers});
        await getPosts();
    }
    return(
        <div>
            
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {posts ? (posts.map((post, index)=> {
                    return (
                    <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.user_id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td><button onClick={()=>(editPost(post))}>Edit</button></td>
                        <td></td>
                    </tr>)
                }
                )): (<p>No Data</p>)}
                
                </tbody>
            </table>
            <div>
                <form className='form d-flex' onSubmit={handleSubmit}>
                    <div>
                        <label className='mx-2' htmlFor="user" >user:</label>
                        <input className='mx-2' type="text" name='user' value={postObj.user} onChange={handleChange} />
                    </div>
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
                    <div>
                        <button type="submit" className='btn btn-primary'>Add Post</button>
                        <button type='button' className='btn btn-outline-success' onClick={updatePost}>Update Post</button>
                    </div>
                </form>
                    
            </div>
        </div>
    )
}