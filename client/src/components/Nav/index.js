import React from "react";
import { Link } from 'react-router-dom';

function TuBizNav() {

  const show = () =>{
    let drop = document.getElementById("navbarTogglerDemo02");

    if(drop.classList.value === 'navbar-collapse collapse') {
      drop.classList.value  = 'navbar-collapse collapse show';
    } else {
      drop.classList.value  = 'navbar-collapse collapse';
    }
  };

    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">

          <Link to="/" className="navbar-brand"> TECHNICAL UNION</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={show}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">| Home</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="/Products/products.html">| Products</a> */}
                <Link to="/Products" className="nav-link">| Products</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="/Services/Services.html">| Services</a> */}
                <Link to="/Services" className="nav-link">| Services</Link>
              </li>

              <li className="nav-item">
                <Link to="/Inventory" className="nav-link" href="/Inventory">| Inventory </Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="formulas.html">| Formulas</a> */}
                <Link to="/Formulas" className="nav-link">| Formulas</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="Interactive.html">| Interactive</a> */}
                <Link to="/Interactive" className="nav-link">| Interactive</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="contactus.html">| Contact Us</a> */}
                <Link to="/ContactUs" className="nav-link">| Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
};

export default TuBizNav;