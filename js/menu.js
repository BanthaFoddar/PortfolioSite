
 $(document).ready(function(){
   $(".menu-on").click(function(){
     $(".primary-nav").slideDown();
     $(".menu-off").slideDown();
   });
   $(".menu-off").click(function(){
     $(".primary-nav").slideUp();
     $(".menu-off").slideUp();
   });
 });
