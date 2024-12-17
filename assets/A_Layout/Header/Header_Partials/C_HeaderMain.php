<?php
$page = basename($_SERVER['PHP_SELF']);
echo
  '
<body>

<!--===== paginacontainer=======-->
<div class="paginacontainer"> 

  <div class="progress-wrap active-progress">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 272.941;"></path>    </svg>
  </div>

</div>


<!--=====preloader start=======-->
<div id="preloader" class="preloader1">
  <div class="progress-circle-all">
      <div class="circle-inner">
          <img src="assets/img/logo/whitedolfin.svg" alt="Fishin Logo" class="fish" 
               onerror="this.onerror=null; this.src="/api/placeholder/60/60";">
      </div>
      <div class="circle-progress"></div> 
  </div>
  <div class="text">Beyt Dwarka....</div>
</div>
<!--=====preloader end=======-->

  <!-- navbar -->
  <header class="header">
    <div class="navbar-uni rounded "id="myModal"> 
    
        <a class="logo-uni z-10" href="Home">Beyt Dwarka</a> <!-- Logo added -->
        <button class="toggle-button-uni" aria-label="Toggle Navigation">&#9776;</button>

            <ul class="nav-items-uni">
            <li class="z-10 navemenumargin" ><a href="Home" class="nav-item-uni ' ?><?php if ($page == "index.php") {
               echo 'active';
             } ?><?php echo '">Home</a></li>
           <li class="dropdown-uni z-10  navemenumargin" style=" color: white;">
              <a class="nav-item-uni nav-subitem-uni 
                '?><?php echo (($page == 'explore.php' || $page == 'experience.php' || $page == 'entertainment.php') ? 'active' : ''); ?>">
                Things To Do
              </a>
                <ul class="dropdown-content-uni" >
                  <li>
                    <a href="Explore"  class="nav-subitem-uni  nav-item-uni' ?><?php if ($page == "experience.php") {
                     echo 'active';
                   } ?><?php echo '">Explore</a>
                  </li>

                  <li>
                    <a href="Experience"  class="nav-subitem-uni nav-item-uni ' ?><?php if ($page == "experience.php") {
                     echo 'active';
                   } ?><?php echo '">Experience</a>
                  </li>

                  <li>
                    <a href="Entertainment"  class="nav-subitem-uni nav-item-uni ' ?><?php if ($page == "entertainment.php") {
                     echo 'active';
                   } ?><?php echo '">Entertainment</a>
                  </li>
                </ul>
              </li>
              <li class="z-10  navemenumargin" ><a href="Accommodation" class="nav-item-uni  ' ?><?php if ($page == "accommodation.php") {
                echo 'active';
              } ?><?php echo '">Accommodation</a></li>
            <li class="z-10  navemenumargin" ><a href="Package" class="nav-item-uni  ' ?><?php if ($page == "pricing.php") {
               echo 'active';
             } ?><?php echo '">Package</a></li>
            <li class="z-10  navemenumargin" ><a href="Gallery" class="nav-item-uni  ' ?><?php if ($page == "gallery.php") {
               echo 'active';
             } ?><?php echo '">Gallery</a></li>
            <li class="z-10  navemenumargin" ><a href="Contact" class="nav-item-uni  ' ?><?php if ($page == "contact.php") {
               echo 'active';
             } ?><?php echo '">Contact Us</a></li>
         <li class="z-10  navemenumargin">
  <a class="nav-button-home booking-button-uni" href="Package">Book Now</a>
</li>

             <div class="rounded" style="
    position: absolute;
    width: 100%;
        left: 0%;
        overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
       height: 132%;
    background-color: transparent;
    z-index: 1;
">
        <div class="wave-uni wave1-uni"></div>
        <div class="wave-uni wave2-uni"></div>
        <div class="wave-uni wave3-uni"></div>
        </div>
        </ul>
      
    </div>
    
    </header>
  <!-- navbar -->
'
                 ?>