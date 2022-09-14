import './App.css';
import { NavLink, Outlet } from 'react-router-dom';


function App() {


  return (
    <div className="">
      <nav className='border-bottom pb-2'>
        <NavLink className='mx-2 text-decoration-none'
          style={({ isActive }) => {
            return { color: isActive ? "red" : "black" }
          }}
          to="/listsandkeys">
          ListAndKeys
        </NavLink> | {" "}
        <NavLink className='mx-2 text-decoration-none'
          style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}
          to="/post">Post (use of props and list-keys) 
        </NavLink> | {" "}

        <NavLink className='mx-2 text-decoration-none'
          style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}
          to="/controlled">Form: ControlledComponent
        </NavLink> | {" "}

        <NavLink className='mx-2 text-decoration-none'
          style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}
          to="/uncontrolled">Form: Uncontrolled Component
        </NavLink> | {" "}

        <NavLink className='mx-2 text-decoration-none'
          style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}
          to="/hooks">Hooks
        </NavLink>

        <NavLink className='mx-2 text-decoration-none'
          style={({ isActive }) => { return { color: isActive ? "red" : "black" } }}
          to="/getPosts">Axios
        </NavLink>

      </nav>
      <Outlet />

    </div>
  );
}

export default App;
