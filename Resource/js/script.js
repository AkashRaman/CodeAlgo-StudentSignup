$(document).ready(function () {
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        };
    }, { 
        offset: '100px;'
    });
   
    // $('.sign-in-btn').hover(
    //     function () {
    //         if ($(window).width() <= "768") {
    //             $(this).removeClass('pulse');
    //         } else {
    //             $(this).addClass('pulse');
    //         }
    // },
    
    //     function () {
    //         $(this).removeClass('pulse');
    // });
    
    // $('.btn-full').hover(function () {
    //     if ($(window).width() <= "768") {
    //             $(this).addClass('shadow-pulse');
    //         } else {
    //             $(this).removeClass('shadow-pulse');
    //         }
    // },
    
    // function () {
    //     $(this).addClass('shadow-pulse');
    // });
    
    $('#fruits').hover(function () {
        $('#vege').css("opacity" , "0.7");
        $('#tradi-food').css("opacity" , "0.7");
        $('#fast-food').css("opacity" , "0.7");
    },
    
    function () {
        $('#vege').css("opacity" , "1");
        $('#tradi-food').css("opacity" , "1");
        $('#fast-food').css("opacity" , "1");
    });
    
    $('#vege').hover(function () {
        $('#fruits').css("opacity" , "0.7");
        $('#tradi-food').css("opacity" , "0.7");
        $('#fast-food').css("opacity" , "0.7");
    },
    
    function () {
        $('#fruits').css("opacity" , "1");
        $('#tradi-food').css("opacity" , "1");
        $('#fast-food').css("opacity" , "1");
    });
    
    $('#tradi-food').hover(function () {
        $('#vege').css("opacity" , "0.7");
        $('#fruits').css("opacity" , "0.7");
        $('#fast-food').css("opacity" , "0.7");
    },
    
    function () {
        $('#vege').css("opacity" , "1");
        $('#fruits').css("opacity" , "1");
        $('#fast-food').css("opacity" , "1");
    });
    
    $('#fast-food').hover(function () {
        $('#vege').css("opacity" , "0.7");
        $('#tradi-food').css("opacity" , "0.7");
        $('#fruits').css("opacity" , "0.7");
    },
    
    function () {
        $('#vege').css("opacity" , "1");
        $('#tradi-food').css("opacity" , "1");
        $('#fruits').css("opacity" , "1");
    });
    
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('.short-copy').animate({ opacity: '1'});
            $('.about-us').addClass('underline');
        } else {
            $('.about-us').removeClass('underline');
        }
    }, {
        offset: '25%;'
    });
    
    $('.js--section-product').waypoint(function (direction) {
        if (direction == "down") {
            $('.about-us').removeClass('underline');
        } else {
            $('.about-us').addClass('underline');
        }
    }, {
        offset: '275px;'
    });
    
     $('.js--section-steps').waypoint(function (direction) {
        if (direction == "down") {
            $('.workings').addClass('underline');
        }; 
        
        if (direction == "up"){
            $('.workings').removeClass('underline');
        };
    }, {
        offset: '20%'
    });
    
    $('.js--section-cities').waypoint(function (direction) {
        if (direction == "down") {
            $('.js--wp-1').animate({ opacity: '1'});
            $('.our-cities').addClass('underline');
            $('.workings').removeClass('underline');
        }; 
        
        if (direction == "up"){
            $('.our-cities').removeClass('underline');
            $('.workings').addClass('underline');
        };
    }, {
        offset: '300px;'
    });
    
    $('.js--section-form').waypoint(function (direction) {
        if (direction == "down") {
            $('.sign-up').addClass('underline');
            $('.our-cities').removeClass('underline');
        };
        
        if (direction == "up"){
            $('.js--wp-1').animate({ opacity: '1'});
            $('.sign-up').removeClass('underline');
            $('.our-cities').addClass('underline');
        };
    }, {
        offset: '20%'
    });
    /*
    $('.nav-section').ready(function () {
        var deviceWidth = $(window).width();
        
        if (deviceWidth >= "768px") {
            $(this).css("display", "inline-block");
        };
    })
    */
    
    
    $('.mobile-nav-icon').click(function () {
        var nav = $('.nav-section');
        var icon = $('.mobile-nav-icon i');
        var isActive = nav.is(":visible");
        nav.slideToggle(200);
        if (isActive == false) {
            $('.main-link').click(function () {
                nav.slideUp(200);
                icon.removeClass('fa-times');
                icon.addClass('fa-bars');
            });
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        } else {
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
        };
    });
    
    $('.footer-nav-icon i').click(function () {
        var footerNav = $('.footer-nav');
        var footerIcon = $('.footer-nav-icon i');
        var isActive = footerNav.is(":visible");
        
        $('.footer-nav').slideToggle(200);
        
        if (isActive == false) {
            footerIcon.removeClass('fa-bars');
            footerIcon.addClass('fa-times');
            $('footer').css("height" , "199.29px");
            $('.footer-nav-icon').addClass('color');
        } else {
            footerIcon.removeClass('fa-times');
            footerIcon.addClass('fa-bars');
            $('footer').css("height" , "fit-content");
            $('.footer-nav-icon').removeClass('color');
        };
        
    });
    
    
    if ($(window).width() <= "768") {
        
        $('.box').removeClass('hover');
        $('.product-img').removeClass('hover');
        $('.work-step').removeClass('hover');
        $('.cities-card').removeClass('hover');
        $('.nav-section').removeClass('hover');
        
        
        $('.box-1').waypoint( function (direction) {
            if (direction == "down") {
                $('.box-1').addClass('transform-105');
            } else {
                $('.box-1').removeClass('transform-105');
            }
            
        },{
            offset: "50%"
        });
        $('.box-2').waypoint( function (direction) {
            if (direction == "down") {
                $('.box-2').addClass('transform-105');
                $('.box-1').removeClass('transform-105');
            } else {
                $('.box-2').removeClass('transform-105');
                $('.box-1').addClass('transform-105');
            }
            
        },{
            offset: "50%"
        });
        $('.box-3').waypoint( function (direction) {
            if (direction == "down") {
                $('.box-3').addClass('transform-105');
                $('.box-2').removeClass('transform-105');
            } else {
                $('.box-3').removeClass('transform-105');
                $('.box-2').addClass('transform-105');
            }
            
        },{
            offset: "50%"
        });
        $('.box-4').waypoint( function (direction) {
            if (direction == "down") {
                $('.box-4').addClass('transform-105');
                $('.box-3').removeClass('transform-105');
            } else {
                $('.box-4').removeClass('transform-105');
                $('.box-3').addClass('transform-105');
            }
            
        },{
            offset: "50%"
        });
        
        $('#section-products').waypoint( function (direction) {
            if (direction == "down") {
                $('.box-4').removeClass('transform-105');
            } else {
                $('.box-4').addClass('transform-105');
            }
            
        },{
            offset: "50%"
        });
        
        $('#fruits').hover(function () {
            
        },

        function () {
            
        });

        $('#vege').hover(function () {
            
        },

        function () {
            
        });

        $('#tradi-food').hover(function () {
            
        },

        function () {
            
        });

        $('#fast-food').hover(function () {
            
        },

        function () {
            
        });

        
        $('#fruits').waypoint(function (direction) {
            if (direction == "down") {
                $('#fruits').addClass('transform-100');
                $('#fruits').css("opacity" , "1");
                $('#vege').css("opacity" , "0.7");
                $('#tradi-food').css("opacity" , "0.7");
                $('#fast-food').css("opacity" , "0.7");
            } else {
                $('#fruits').removeClass('transform-100');
                $('#fruits').css("opacity" , "1");
                $('#vege').css("opacity" , "1");
                $('#tradi-food').css("opacity" , "1");
                $('#fast-food').css("opacity" , "1");
            }
        }, {
            offset: "50%"
        });

        $('#vege').waypoint(function (direction) {
            if (direction == "down") {
                $('#vege').addClass('transform-100');
                $('#fruits').removeClass('transform-100');
                $('#fruits').css("opacity" , "0.7");
                $('#vege').css("opacity" , "1");
                $('#tradi-food').css("opacity" , "0.7");
                $('#fast-food').css("opacity" , "0.7");
            } else {
                $('#vege').removeClass('transform-100');
                $('#fruits').addClass('transform-100');
                $('#fruits').css("opacity" , "1");
                $('#vege').css("opacity" , "0.7");
                $('#tradi-food').css("opacity" , "0.7");
                $('#fast-food').css("opacity" , "0.7");
            }
        }, {
            offset: "50%"
        });

        $('#tradi-food').waypoint(function (direction) {
            if (direction == "down") {
                $('#tradi-food').addClass('transform-100');
                $('#vege').removeClass('transform-100');
                $('#fruits').css("opacity" , "0.7");
                $('#vege').css("opacity" , "0.7");
                $('#tradi-food').css("opacity" , "1");
                $('#fast-food').css("opacity" , "0.7");
            } else {
                $('#tradi-food').removeClass('transform-100');
                $('#vege').addClass('transform-100');
                $('#fruits').css("opacity" , "0.7");
                $('#vege').css("opacity" , "1");
                $('#tradi-food').css("opacity" , "0.7");
                $('#fast-food').css("opacity" , "0.7");
            }
        }, {
            offset: "50%"
        });

        $('#fast-food').waypoint(function (direction) {
            if (direction == "down") {
                $('#fast-food').addClass('transform-100');
                $('#tradi-food').removeClass('transform-100');
                $('#fruits').css("opacity" , "0.7");
                $('#vege').css("opacity" , "0.7");
                $('#tradi-food').css("opacity" , "0.7");
                $('#fast-food').css("opacity" , "1");
            } else {
                $('#fast-food').removeClass('transform-100');
                $('#tradi-food').addClass('transform-100');
                $('#fruits').css("opacity" , "0.7");
                $('#vege').css("opacity" , "0.7");
                $('#tradi-food').css("opacity" , "1");
                $('#fast-food').css("opacity" , "0.7");
            }
        }, {
            offset: "50%"
        });

        $('#section-steps').waypoint( function (direction) {
            if (direction == "down") {
                $('#fast-food').removeClass('transform-100');
                $('#fruits').css("opacity" , "1");
                $('#vege').css("opacity" , "1");
                $('#tradi-food').css("opacity" , "1");
                $('#fast-food').css("opacity" , "1");
            } else {
                $('#fast-food').addClass('transform-100');
                $('#fruits').css("opacity" , "0.7");
                $('#vege').css("opacity" , "0.7");
                $('#tradi-food').css("opacity" , "0.7");
                $('#fast-food').css("opacity" , "1");
            }
            
        },{
            offset: "50%"
        });
        
        $('#work-step-1').waypoint( function (direction) {
            if (direction == "down") {
                $('#work-step-1').addClass('work-step-mobile');
            } else {
                $('#work-step-1').removeClass('work-step-mobile');
            }
            
        },{
            offset: "50%"
        });
        $('#work-step-2').waypoint( function (direction) {
            if (direction == "down") {
                $('#work-step-2').addClass('work-step-mobile');
                $('#work-step-1').removeClass('work-step-mobile');
            } else {
                $('#work-step-2').removeClass('work-step-mobile');
                $('#work-step-1').addClass('work-step-mobile');
            }
            
        },{
            offset: "50%"
        });
        $('#work-step-3').waypoint( function (direction) {
            if (direction == "down") {
                $('#work-step-3').addClass('work-step-mobile');
                $('#work-step-2').removeClass('work-step-mobile');
            } else {
                $('#work-step-3').removeClass('work-step-mobile');
                $('#work-step-2').addClass('work-step-mobile');
            }
            
        },{
            offset: "50%"
        });
        $('#work-step-4').waypoint( function (direction) {
            if (direction == "down") {
                $('#work-step-4').addClass('work-step-mobile');
                $('#work-step-3').removeClass('work-step-mobile');
            } else {
                $('#work-step-4').removeClass('work-step-mobile');
                $('#work-step-3').addClass('work-step-mobile');
            }
            
        },{
            offset: "50%"
        });
        
        $('#section-cities').waypoint( function (direction) {
            if (direction == "down") {
                $('#work-step-4').removeClass('work-step-mobile');
            } else {
                $('#work-step-4').addClass('work-step-mobile');
            }
            
        },{
            offset: "50%"
        });
        
        $('.san-francisco').waypoint( function (direction) {
            if (direction == "down") {
                $('.san-francisco').addClass('cities-card-mobile');
            } else {
                $('.san-francisco').removeClass('cities-card-mobile');
            }
            
        },{
            offset: "50%"
        });
        $('.mumbai').waypoint( function (direction) {
            if (direction == "down") {
                $('.mumbai').addClass('cities-card-mobile');
                $('.san-francisco').removeClass('cities-card-mobile');
            } else {
                $('.mumbai').removeClass('cities-card-mobile');
                $('.san-francisco').addClass('cities-card-mobile');
            }
            
        },{
            offset: "50%"
        });
        $('.tokyo').waypoint( function (direction) {
            if (direction == "down") {
                $('.tokyo').addClass('cities-card-mobile');
                $('.mumbai').removeClass('cities-card-mobile');
            } else {
                $('.tokyo').removeClass('cities-card-mobile');
                $('.mumbai').addClass('cities-card-mobile');
            }
            
        },{
            offset: "50%"
        });
        $('.sydney').waypoint( function (direction) {
            if (direction == "down") {
                $('.sydney').addClass('cities-card-mobile');
                $('.tokyo').removeClass('cities-card-mobile');
            } else {
                $('.sydney').removeClass('cities-card-mobile');
                $('.tokyo').addClass('cities-card-mobile');
            }
            
        },{
            offset: "50%"
        });
        
        $('.london').waypoint( function (direction) {
            if (direction == "down") {
                $('.london').addClass('cities-card-mobile');
                $('.sydney').removeClass('cities-card-mobile');
            } else {
                $('.london').removeClass('cities-card-mobile');
                $('.sydney').addClass('cities-card-mobile');
            }
            
        },{
            offset: "50%"
        });
        
        $('#section-form').waypoint( function (direction) {
            if (direction == "down") {
                $('.london').removeClass('cities-card-mobile');
            } else {
                $('.london').addClass('cities-card-mobile');
            }
            
        },{
            offset: "50%"
        });
        
        
    } else {
        $('.box').addClass('hover');
        $('.product-img').addClass('hover');
        $('.work-step').addClass('hover');
        $('.cities-card').addClass('hover');
        $('.nav-section').addClass('hover');
}
});
