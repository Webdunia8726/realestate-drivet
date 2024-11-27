document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".Header-containerr");
    if (headerContainer) {
      headerContainer.innerHTML = `
         
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/assets/images/logo/builditnew  logo-02.png" alt="" class="logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">HOME</a>
                    </li>
    
                    <!-- Real Estate Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="realestate.html" id="realestateDropdown" role="button" aria-expanded="false">
                            REALESTATE
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="realestateDropdown">
                            <li><a class="dropdown-item" href="/realestate-location-wise/realestate-location.html">REALESTATE NEAR ME</a></li>
                        </ul>
                    </li>
    
                    <!-- Interior Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="interior.html" id="interiorDropdown" role="button" aria-expanded="false">
                            INTERIOR 
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="interiorDropdown">
                            <li><a class="dropdown-item" href="/interior-locatrion-wise/interior-location.html">INTERIOR NEAR ME</a></li>
                        </ul>
                    </li>
    
                    <!-- Construction Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="construction/construction.html" id="constructionDropdown" role="button" aria-expanded="false">
                            CONSTRUCTION
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="constructionDropdown">
                            <li><a class="dropdown-item" href="construction-interior.html">Interior Design</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    

    
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var CallContainer = document.querySelector(".footer-bottom");
    if (CallContainer) {
      CallContainer.innerHTML = `   <footer class="bg-dark text-light pt-5 pb-4">
    <div class="container">
        <div class="row">

            <!-- Branding Section -->
            <div class="col-md-4 mb-4">
                <h5 class="text-uppercase fw-bold mb-3">BuildIt New</h5>
                <p>Building dreams with excellence. Explore premium real estate, interior designs, and construction services that redefine luxury and quality.</p>
            </div>

            <!-- Quick Links -->
            <div class="col-md-2 mb-4">
                <h5 class="text-uppercase fw-bold mb-3">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="index.html" class="text-light text-decoration-none">Home</a></li>
                    <li><a href="realestate.html" class="text-light text-decoration-none">Real Estate</a></li>
                    <li><a href="interior.html" class="text-light text-decoration-none">Interior</a></li>
                    <li><a href="construction/construction.html" class="text-light text-decoration-none">Construction</a></li>
                </ul>
            </div>

            <!-- Contact Information -->
            <div class="col-md-3 mb-4">
                <h5 class="text-uppercase fw-bold mb-3">Contact Us</h5>
                <p><i class="fas fa-phone-alt me-2"></i>+91 958 756 99 99</p>
                <p><i class="fas fa-envelope me-2"></i>halconinfra@gmail.com</p>
                <p><i class="fas fa-map-marker-alt me-2"></i>Tangedapalle, Shankarpally</p>
            </div>

            <!-- Social Media Links -->
            <div class="col-md-3 mb-4">
                <h5 class="text-uppercase fw-bold mb-3">Follow Us</h5>
                <div class="d-flex">
                    <a href="#" class="text-light fs-5 me-3"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-light fs-5 me-3"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-light fs-5 me-3"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-light fs-5"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Copyright Section -->
    <div class="bg-secondary text-center py-3 mt-4">
        <p class="mb-0">© 2024 BuildIt New. All Rights Reserved. Designed with ❤️ by [Your Name].</p>
    </div>
</footer>
`;
    }
  });
 

  document.addEventListener("DOMContentLoaded", function () {
    var CallContainer = document.querySelector(".call-button");
    if (CallContainer) {
      CallContainer.innerHTML = `  
      <!-- Fixed WhatsApp and Call Buttons -->
<div class="fixed-button whatsapp-button">
    <a href="https://wa.link/x0a6fg" target="_blank" style="color: inherit; text-decoration: none;">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>

<div class="fixed-button call-button">
    <a href="tel:+91 9652631186" style="color: inherit; text-decoration: none;">
        <i class="fas fa-phone"></i>
    </a>
</div> `;
    }
  });
 