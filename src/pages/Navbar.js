
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container-fluid p-4 custom-bg-color ">
          <div className="container-fluid container-lg p-10">
            <div className="textColor">
              <div className="row justify-content-center align-items-center mx-auto">
                <div className="col-12 col-lg-3 p-0">
                  <h5 style={{textAlign:"center"}}> HOSTEL RESERVATION </h5>
                </div>
                <div className="col-4 col-lg-3 sideLine">
                  <div className="d-flex justify-content-center align-items-center">
                    
                  </div>
                </div>
                <div className="col-4 col-lg-3 sideLine">
                  <div className="d-flex justify-content-center align-items-center">
                   
                  </div>
                </div>
                <div className="col-4 col-lg-3">
                  <div className="d-flex justify-content-center align-items-center">
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center display-3 fw-bold mb-2 d-lg-none">Indoor cricket</div>
            <div className="navbarBgDark" data-bs-theme="dark">
              <nav className="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">
                <button
                  className="navbar-toggler m-3 w-100"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  Menu
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                  <ul className="navbar-nav  ps-0">
                    <li className="nav-item">
                      <Link className='nav-link' to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/hostel">
                      Hostel
                      </Link>
                    </li>
              

                    <li className="nav-item">
                      <Link className='nav-link' to="/aboutus">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/contactus">
                        Contact Us
                      </Link>
                    </li>
                    
                  
                    <li className="nav-item">
  
             <span> <Link className='nav-link' to="/signup">Register</Link><p color='white'><b></b></p></span>
                </li>
                <li>
                <span>
              <Link className='nav-link' to="/login">Login</Link></span>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

