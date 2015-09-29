$(document).ready(function() {
        $("#hd-icon,#hd-pre").click(function() {
          $(".shopping-list").removeClass('hide-right');
          $(".shopping-list").addClass('show-right');
          $(".shopping-list header .fa").addClass("ico-scale-up");
        });
        $("#container, #cat-list").click(function() {
          if($(".shopping-list").is(".show-right")){
            $(".shopping-list").addClass('hide-right');
          };
          $(".shopping-list").removeClass('show-right');
          $(".shopping-list header .fa").removeClass("ico-scale-up");

          if($("#login-content").is(".show-login")){
            $("#login-content").addClass('hide-login');
          };
          $("#login-content").removeClass('show-login');

          if($("#footer-contato").is(".show-contato")){
            $("#footer-contato").addClass('hide-contato');
          };
          $("#footer-contato").removeClass('show-contato');
        });
        $("#login").click(function() {
          $("#login-content").removeClass('hide-login');
          $("#login-content").addClass('show-login');
        })
        $("#contato").click(function() {
          $("#footer-contato").removeClass('hide-contato');
          $("#footer-contato").addClass('show-contato');
        })
      });