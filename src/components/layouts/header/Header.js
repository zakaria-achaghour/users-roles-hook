import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props)=> {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            {branding}
          </NavLink>
         
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/roles" className="nav-link">Roles</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">Login</NavLink>
              </li>
             
            </ul>
         
        </div>
      </nav>
    )
}

export default Header
