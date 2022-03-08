import React from "react";

// EDIT THE `<a>` TAGS 

function Nav() {
    return(
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <a class="navbar-brand" href=""> TECHNICAL UNION</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">| Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Products/products.html">| Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Services/Services.html">| Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="partnumbers.html">| Inventory </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="formulas.html">| Formulas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Interactive.html">| Interactive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contactus.html">| Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
    );
};

export default Nav;