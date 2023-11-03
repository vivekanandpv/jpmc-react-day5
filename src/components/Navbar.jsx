import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme='dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' exact className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/playground' className='nav-link'>
                  Playground
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/registration-form' exact className='nav-link'>
                  Registration Form
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/counter' exact className='nav-link'>
                  Counter
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' exact className='nav-link'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
