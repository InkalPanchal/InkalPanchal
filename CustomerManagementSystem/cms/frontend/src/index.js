import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Customer  from './Components/Customer';
import Login from './Components/Login'
import AddCustomer from './Components/addCustomer';
import EditCustomer from './Components/editCustomer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login />}></Route>
          {localStorage.getItem('jwt') &&
              <>
                <Route path='customer' element={ <Customer />} />
                <Route path='customer/addCustomer' element={<AddCustomer />}></Route>
                <Route path='customer/editCustomer/:id' element={<EditCustomer />}></Route>
              </>
          }
          {!localStorage.getItem('jwt') && <Route path='login' element={<Login />}></Route> }
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
