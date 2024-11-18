document.addEventListener("DOMContentLoaded", function () {
    var headerContainer = document.querySelector(".Header-containerr");
    if (headerContainer) {
      headerContainer.innerHTML = `
         
       <header class="header-area header-transparent-bar sticky-bar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-6 col-4">
                    <div class="logo">
                        <a href="index.html">
                            <img class="white-logo" src="assets/images/logo/logo.png" alt="logo">
                            <img class="black-logo" src="assets/images/logo/logo-black.png" alt="logo">
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 d-none d-lg-block d-flex justify-content-center">
                    <div class="main-menu text-center">
                        <nav>
                            <ul>
                                <li><a href="index.html">HOME</a>
                                    <!-- <ul class="sub-menu-style">
                                        <li><a href="index.html">Home version 1 </a></li>
                                        <li><a href="index-2.html">Home version 2</a></li>
                                    </ul> -->
                                </li>
                                <li><a href="service.html">REALESTATE</a>
                                    
                                </li>
                                <li><a href="project.html">INTERIOR</a>
                                   
                                    
                                </li>
                                <li><a href="#">CONSTRUCTION</a>
                                  
                                    
                                </li>
                              
                                
                                <li><a href="contact.html">CONTACT US</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-8">
                    <div class="header-action-wrap">
                        <div class="header-action-style header-search-1">
                            <a class="search-toggle" href="#">
                                <i class="dlicon ui-1_zoom s-open"></i>
                                <i class="dlicon ui-1_simple-remove s-close"></i>
                            </a>
                          
                            
                        </div>
                        <div class="header-action-style">
                            <a class="header-aside-button" href="#"><i class="dlicon ui-3_menu-left"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  <!-- aside start -->
    <div class="header-aside-active">
        <div class="header-aside-wrap">
            <a class="aside-close"><i class="dlicon ui-1_simple-remove"></i></a>
            <div class="header-aside-content">
                <div class="mobile-menu-area">
                    <div class="mobile-menu-wrap">
                        <!-- mobile menu start -->
                        <div class="mobile-navigation">
                            <!-- mobile menu navigation start -->
                            <nav>
                                <ul class="mobile-menu">
                                    <li class="menu-item-has-children"><a href="index.html">HOME</a>
                                        <ul class="dropdown">
                                            <li><a href="index.html">Home version 1 </a></li>
                                            <li><a href="index-2.html">Home version 2</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="service.html">REALESTATE</a>
                                        <ul class="dropdown">
                                            <li><a href="service.html">Service</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="project.html">INTERIOR</a>
                                        <ul class="dropdown">
                                            <li><a href="project.html">Project Standard</a></li>
                                            <li><a href="project-2-col.html">Project 2 Column</a></li>
                                            <li><a href="project-fullwide.html">Project Fullwide</a></li>
                                            <li><a href="project-carousel.html">Project Carousel </a></li>
                                            <li><a href="project-carousel-fullwide.html">Project Carousel Fullwide</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                            <li><a href="project-details-2.html">Project Details 2</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">CONSTRUCTION</a>
                                        <ul class="dropdown">
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="pricing.html">Pricing</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                   
                                    
                                    <li><a href="contact.html">CONTACT US </a></li>
                                </ul>
                            </nav>
                            <!-- mobile menu navigation end -->
                        </div>
                        <!-- mobile menu end -->
                    </div>
                </div>
               
                
                <div class="aside-banner-wrap">
                    <a href="project-details.html">
                        <img src="assets/images/banner/banner-1.jpg" alt="banner">
                        <div class="aside-banner-add-content">
                            <h5>Ad Banner</h5>
                            <p>info@example.com</p>
                        </div>
                    </a>
                </div>
                <div class="aside-contact-info">
                    <ul>
                        <li><i class="dlicon ui-1_email-84"></i>Info@example.com</li>
                        <li><i class="dlicon tech-2_rotate"></i>(+55) 254. 254. 254</li>
                        <li><i class="dlicon ui-1_home-minimal"></i>Helios Tower 75 Tam Trinh Hoang - Ha Noi - Viet Nam</li>
                    </ul>
                </div>
                <div class="social-icon-style mb-5">
                    <a class="facebook" href="#"><i class="fa fa-facebook"></i></a>
                    <a class="twitter" href="#"><i class="fa fa-twitter"></i></a>
                    <a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a>
                    <a class="behance" href="#"><i class="fa fa-behance"></i></a>
                </div>
                <div class="copyright">
                    <p>Copyright ©2021 All rights reserved | Made with <i class="fa fa-heart"></i> by <a href="https://themeforest.net/user/hastech/portfolio"> HasTech </a>.</p>
                </div>
            </div>
        </div>
    </div>
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var CallContainer = document.querySelector(".footer-bottom");
    if (CallContainer) {
      CallContainer.innerHTML = `    <!-- Footer area -->
    <footer class="section bg-black">
        <div class="footer-top section-padding">
            <div class="container">
                <div class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n8">
                    <div class="col mb-8">
                        <div class="footer-widget footer-about">
                            <div class="footer-logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo"></a>
                            </div>
                            <p>Your trusted partner in construction and development.</p>
                            <div class="social-icon-style">
                                <a class="facebook" href="#"><i class="fab fa-facebook"></i></a>
                                <a class="twitter" href="#"><i class="fab fa-instagram"></i></a>
                                <a class="google-plus" href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-8">
                        <div class="footer-widget footer-list">
                            <h3 class="footer-title">Useful Link</h3>
                            <ul>
                                <li><a href="contact.html">Home</a></li>
                                <li><a href="contact.html">Realestate</a></li>
                                <li><a href="service.html">Construction </a></li>
                                <li><a href="blog.html">Interior</a></li>
                                <li><a href="contact.html">Contact Us </a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col mb-8">
                        <div class="footer-widget footer-list">
                            <h3 class="footer-title">Contact Us</h3>
                            <ul>
                                <li>
                                    <span class="title">T:</span>
                                    <span class="desc">+91 9652631186</span>
                                </li>
                                <li>
                                    <span class="title">E:</span>
                                    <span class="desc">builditdreamz@gmail.com</span>
                                </li>
                                <li>
                                    <span class="title">A:</span>
                                    <span class="desc">10-2-289/83, Mehar Mansion, Shanti Nagar Colony, Masab Tank

Hyderabad, Telangana 500028

India</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col mb-8">
                        <div class="footer-widget footer-newsletter">
                            <h3 class="footer-title">Newsletter</h3>
                            <p>Get E-mail updates about our latest newa and special offers.</p>
                            <div id="mc_embed_signup" class="subscribe-form">
                                <form id="mc-embedded-subscribe-form" class="validate" novalidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                    <div id="mc_embed_signup_scroll" class="mc-form">
                                        <input class="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL" value="">
                                        <div class="mc-news" aria-hidden="true">
                                            <input type="text" value="" tabindex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef">
                                        </div>
                                        <div class="clear">
                                            <input id="mc-embedded-subscribe" class="button" type="submit" name="subscribe" value="Subscribe">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="copyright text-center">
                    <p>
© 2024 BUILDIT. All rights reserved.                    </p>
                </div>
            </div>
        </div>
    </footer>`;
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
 