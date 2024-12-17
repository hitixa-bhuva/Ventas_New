<?php
$page = basename($_SERVER['PHP_SELF']);
echo
  '

  <body>
  <div class="content">
    <header class="wrapper bg-soft-primary">
      <nav class="navbar navbar-expand-lg classic transparent navbar-light">
        <div class="container flex-lg-row flex-nowrap align-items-center">
          <!-- Logo -->
          <div class="navbar-brand w-100">
            <a href="Home" aria-label="Go to Home Page">
              <img src="./assets/img/icons/logo/Ventas_Logo Design_C2C (1).png" class="img-fluid h-30" alt="Ventas Logo"
                style="width: 170px;">
            </a>
          </div>

          <!-- Offcanvas Navbar -->
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div class="offcanvas-header d-lg-none">
              <a href="Home" aria-label="Go to Home Page">
                <img src="./assets/img/icons/logo/Ventas_Logo Design_C2C (1).png" class="img-fluid w-25 h-30"
                  alt="Ventas Logo">
              </a>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>

            <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="Home">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="About">About Us</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="Contact">Contact Us</a>
                </li>
              </ul>

              <!-- Contact Us Button in Offcanvas -->
              <div class="d-lg-none mt-auto">
                <a href="RequestDemo" class="btn btn-sm text-white rounded-pill w-100 mt-4">Request a demo</a>
              </div>
            </div>
          </div>


          <!-- Contact Us Button for Desktop -->
          <div class="navbar-other ms-lg-4">
            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <li class="nav-item d-none d-md-block">
                <a href="RequestDemo" class="btn btn-sm text-white rounded-pill">Request a demo</a>
              </li>
              <li class="nav-item d-lg-none">
                <button class="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>

  <!-- 1dwaudsdasoijdiNCJS NSNCJAioxqios -->
'
                 ?>