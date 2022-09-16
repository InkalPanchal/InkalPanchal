export default function AuthHeader(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.data.Token){
        // console.log(user.data.Token);
        return { 'Content-Type':'application/json' ,Authorization: `Bearer ${user.data.Token}` }
    }else {
        return {}
    }
}