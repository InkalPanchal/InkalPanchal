import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NumberList from './components/NumberList/NumberList';
import  Post  from './components/Post/Post';
import ControlledComponent from './components/ControlledComponent/ControlledComponent';
import UncontrolledComponent from './components/UncontrolledComponent/UncontrolledComponent';
import HooksExample from './components/HooksExample/HooksExample';
import Item from './components/Item/Item';
import Posts from './components/Postscomponent/component';
import Login from './components/logincomponent/component';
import Data from './components/datacomponent/component';
import Registeration from './components/registercomponent/component';
// import GuradedRoute from './components/GurdedRouteComponent/GuardedRoute'

// let isAuthenticated = localStorage.getItem("user") ? true : false;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> }>
        <Route path='listsandkeys' element={ <NumberList /> }>
          <Route path='item/:id' element={<Item />}/>
        </Route>
        <Route path='post' element={ <Post /> }></Route>
        <Route path='controlled' element={ <ControlledComponent /> }></Route>
        <Route path='uncontrolled' element={ <UncontrolledComponent /> }></Route>
        <Route path='hooks' element={ <HooksExample /> }></Route>
        <Route path='getPosts' element={<Posts />}></Route>
        <Route path='login' element={<Login />}></Route>
        {/* {localStorage.getItem("user") &&
        <Route path='users' element={<Data />}/>
        } */}
        
        <Route path='users' element={<Data />}/>
        

        {/* <GuradedRoute path='users' component={Data} auth={isAuthenticated} /> */}
        <Route path='register' element={<Registeration/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
