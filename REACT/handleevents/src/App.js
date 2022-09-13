import './App.css';
import Toggle from './Toggle'
import React from 'react';
import SendMail from './sendMail';
function Form(){
  function handleSubmit(e){
    e.preventDefault();
    alert('You clicked submit.');
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
    <Toggle></Toggle>
    <LoginButton />
    
    </div>
  )
}

class LoginButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      btnClicked:true
    }
  }
  handleClick(){
    console.log(this.state.btnClicked ? 'On' : 'off')
  }
  render(){
    return (
      <button onClick={()=>this.handleClick()}>Login</button>)
    
  }
}


// Conditional rendering
function UserGreeting(props){
  return (<h1>Welcome back!</h1>)
}

function GuestGreeting(props){
  return (<h1>Please Sign up.</h1>)
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />
  }
  return <GuestGreeting />
}

//login control conditional rendering
function Login(props){
  return <button onClick={props.onClick}>Login</button>
}
function LogOut(props){
  return <button onClick={props.onClick}>LogOut</button>
}
class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn:false}
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false});
  }
 render(){
  const isLoggedIn = this.state.isLoggedIn;
  let button;
  if(isLoggedIn){
    button = <LogOut onClick={this.handleLogoutClick}/>;
  }else {
    button = <Login onClick={this.handleLoginClick} />;
  }
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
    </div>
  )
 }
}



function App() {
  return (
    <div className="">
      <Form />
      <hr />
      <LoginControl />
      <hr />
      <SendMail />
    </div>
  );
}

export default App;
