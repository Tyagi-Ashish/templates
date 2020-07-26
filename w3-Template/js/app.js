$(document).ready(function(){

    /* ------------------------ STICKY NAVIGATION --------------------------- */
    $('.js--section-1').waypoint(function(direction){

        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }

    },{
        offset: '200px;'
    });

    $('.js--nav-icon').click(function(){

      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');
      nav.slideToggle(200);
      
      if (icon.hasClass('fa-bars')) {
          icon.addClass('fa-times');
          icon.removeClass('fa-bars');
      } else {
          icon.addClass('fa-bars');
          icon.removeClass('fa-times');
      }  
      


  });

    /* --------------- CURRENT-NAVIGATION ------------------------ */


    /* --------------- NAVIGATION SCROLL ------------------------ */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });


      /* --------------- ANIMATION ON SCROLL ------------------------ */

      $('.js--wp-1').waypoint(function(direction){

        $('.js--wp-1').addClass('animated fadeIn');

      },{
          offset: '50%;'
      });

      $('.js--wp-2').waypoint(function(direction){

        $('.js--wp-2').addClass('animated fadeIn');

      },{
          offset: '50%;'
      });

      $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    },
    {
        offset: '70%;'
    });
});