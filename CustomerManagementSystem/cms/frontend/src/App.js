import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { NavLink, Outlet } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'


function App() {
  return (
    <div className="">
      <nav className="px-3 navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container  text-light">
          <a className="navbar-brand text-fw-bold text-light" href="/">CMS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <NavLink to='/customer' className='text-decoration-none nav-link text-light'>CustomerList</NavLink>
              </li>
            </ul>
            <ul className="d-flex navbar-nav text-light list-unstyled mb-2 mb-lg-0">
              <li className="nav-item dropdown me-3">
                <a href="/" className="nav-link text-light dropdown-toggle" data-bs-toggle="dropdown">
                  <Icon.Person></Icon.Person> Welcome User
                  <div className="dropdown-menu">
                      <a href="/" className="dropdown-item">
                        <Icon.PersonBadge></Icon.PersonBadge> Profile
                      </a>
                      <a href="settings.html" className="dropdown-item">
                        <Icon.Gear></Icon.Gear> Settings
                      </a>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                <NavLink to='/login' className='text-decoration-none nav-link text-light'><Icon.DoorOpen></Icon.DoorOpen> Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="main-header" className="p-2 bg-primary text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1><em className="fa fa-gear  me-lg-1"></em>Dashboard</h1>
                </div>
            </div>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
      <footer id="" className="bg-dark text-white p-4 fixed-bottom"  >
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="lead text-center">Copyright &copy; 2022 CMS </p>
                </div>
            </div>
        </div>   
      </footer>
    </div>
  );
}

export default App;
