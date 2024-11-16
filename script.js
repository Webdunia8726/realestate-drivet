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
    var CallContainer = document.querySelector(".Call-button");
    if (CallContainer) {
      CallContainer.innerHTML = `<a href="https://wa.me/YOURNUMBER" class="whatsapp-button" target="_blank" title="Contact us on WhatsApp">
      <i class="fab fa-whatsapp"></i>
  </a>
  
    <a href="tel:YOURNUMBER" class="call-button" title="Call us">
      <i class="fas fa-phone-alt"></i>
  </a>`;
    }
  });
  (function($) {
    "use strict";

    /*-----------------
        Menu Stick
    -----------------*/
    var header = $('.sticky-bar');
    var $window = $(window);
    $window.on('scroll', function() {
        var scroll = $window.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });

    /*-------------------------------
       Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.search-wrap-1').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.search-wrap-1').addClass('open');
        }
    })

    /*====== QuickInfo ======*/
    function quickInfo() {
        var searchTrigger = $('.header-aside-button'),
            endTriggersearch = $('.aside-close'),
            container = $('.header-aside-active');
        searchTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTriggersearch.on('click', function() {
            container.removeClass('inside');
        });
    };
    quickInfo();


    /*---------------------
            Mobile menu
        --------------------- */
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

    // Hero slider active
    var heroSliderActive = new Swiper('.hero-slider-active', {
        loop: true,
        speed: 750,
        effect: 'fade',
        slidesPerView: 1,
        navigation: {
            nextEl: '.home-slider-next , .home-slider-next2 , .home-slider-next3',
            prevEl: '.home-slider-prev , .home-slider-prev2 , .home-slider-prev3',
        }
    });

    /*====== Brand logo active ======*/
    var brandLogo = new Swiper('.brand-logo-active', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            }
        },
    });

    // Project slider active
    var projectSliderActive = new Swiper('.project-slider-active', {
        slidesPerView: 4,
        loop: true,
        navigation: {
            nextEl: '.project-slider-next',
            prevEl: '.project-slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        },
    });


    /*====== Testimonial active ======*/
    var testimonialActive = new Swiper('.testimonial-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.home-slider-next , .home-slider-next2 , .home-slider-next3',
            prevEl: '.home-slider-prev , .home-slider-prev2 , .home-slider-prev3',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        },
    });

    /*====== Blog active ======*/
    var blogActive = new Swiper('.blog-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        },
    });

    /*--
        Hover Parallax Js
    ------------------------------------*/
    if ($(".hover_plx").length > 0) {
        var sceneElements = document.querySelectorAll('.hover_plx');
        var parallaxScenes = [];
        for (var i = 0; i < sceneElements.length; i++) {
            parallaxScenes.push(new Parallax(sceneElements[i]));
        }
    }


    /* ----------------------------
		Odometer Activation 
    -------------------------------*/
    if ($('.odometer').length) {
        var elemOffset = $('.odometer').offset().top;
        var winHeight = $(window).height();
        if (elemOffset < winHeight) {
            $('.odometer').each(function() {
                $(this).html($(this).data('count-to'));
            });
        }
        $(window).on('scroll', function() {
            var elemOffset = $('.odometer').offset().top;

            function winScrollPosition() {
                var scrollPos = $(window).scrollTop(),
                    winHeight = $(window).height();
                var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
                return scrollPosition;
            }
            if (elemOffset < winScrollPosition()) {
                $('.odometer').each(function() {
                    $(this).html($(this).data('count-to'));
                });
            }
        });
    };

    /*====== Video active ======*/
    $('.video-banner').on('click', '.status', function(e) {
        e.preventDefault();
        var $el = $(this),
            $banner = $el.closest('.video-banner'),
            video = $el.closest('.video-banner').find('video')[0];
        if (video.paused) {
            $banner.addClass('playing');
            video.play();
        } else {
            $banner.removeClass('playing');
            video.pause();
        }
    });


    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*------ Image Conversion Active -------- */
    var beforeandafter = $('.beforeandafter');
    if (beforeandafter.length) {
        var beforeAfter;
        beforeAfter = new ddbeforeandafter({
            wrapperid: 'beforeandafteractive',
        });
    }

    /*--
    Magnific Popup
    ------------------------*/
    $('.img-zoom').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /*------ Isotope active 2 ----*/
    $('.grid').imagesLoaded(function() {
        // filter items on button click
        $('.project-menu-active').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid2.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid2 = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    $('.isotope-btn-add-active button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*-------------------------
      Scroll Animation
    --------------------------*/
    AOS.init({
        once: true,
        duration: 1000,
    });

    /*---------------------
        Sidebar active
    --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 767,
    });




})(jQuery);