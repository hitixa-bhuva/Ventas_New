<?php

$Title = "Ventas Sitemap | Navigate Our CRM Solution for Ceramic Exporters";
$MetaDescription = "Explore the Ventas website sitemap for a complete overview of our CRM solutions, helping ceramic exporters streamline lead management and grow their business.";
$MetaKeywords = "Ventas sitemap, CRM for ceramic exporters, lead management CRM, ceramic industry software, website navigation Ventas";
?>

<?php
include __DIR__ . '/assets/A_Layout/Header/header.php';

?>

<section class="pt-5 pb-1 mt-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div class="text-center">
                    <h1 class="sitemap-text">Ventas: Site Map</h1 >
                </div>
            </div>
        </div>

    </div><!-- end of .container-->
</section>

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-11 table-responsive">
                <div class="sitemap">
                    <hr>
                </div>
            </div>
        </div>
    </div><!-- end of .container-->

<div>
    <div class="container justify-content-center table-responsive w-100 wow animate__fadeInUp slow">
        <div class="sitemap">
            <nav class="primaryNav wow fadeIn slow">
                <ul>
                    <li id="home">
                        <a href="Home" class="align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                            </svg> Home
                        </a>
                    </li>
                    <li>
                        <a href="About" class="py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                            </svg>
                            About Us
                        </a>
                    </li>

                    <li>
                        <a href="Contact    " class="py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-file-text-fill" viewBox="0 0 16 16">
                                <path
                                    d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1" />
                            </svg>
                            Contact Us</a>
                    </li>
                    <li>
                        <a href="RequestDemo" class="py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                            </svg>
                            Request a demo </a>
                    </li>
                </ul>
        </div>
    </div>
</div>


<!-- navbar -->
<script src="./assets/js/custm.js"></script>
<!-- navbar -->
<script>
    const navbar = document.querySelector('.navbar-uni');
    const toggleButton = document.querySelector('.toggle-button-uni');
    const navItems = document.querySelector('.nav-items-uni');
    const body = document.body;

    toggleButton.addEventListener('click', () => {

        if (navItems.classList.contains('show')) {
            // Disable scrolling by adding a class to the body
            body.classList.remove('navbar-hidden');
            console.log("Sidebar is open, scroll is disabled");
        } else {
            // Enable scrolling by removing the class from the body
            body.classList.toggle('navbar-hidden');
            console.log("Sidebar is closed, scroll is enabled");
        }
    });


    // Toggle nav items on button click
    toggleButton.addEventListener('click', () => {
        navItems.classList.toggle('show');

    });

    // Close the navbar when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navItems.classList.contains('show')) {
            body.classList.remove('navbar-hidden');
            navItems.classList.remove('show');
        }
    });
</script>
<?php
include __DIR__ . '/assets/A_Layout/Footer/footer.php';

?>