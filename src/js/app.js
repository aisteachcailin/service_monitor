//переключение пунтков меню "включить/отключить"
   $(".on").click(function() {
     $(this).css("display", "none");
     $(".off").css("display", "inline-block");
   });

     $(".off").click(function() {
       $(this).css("display", "none");
       $(".on").css("display", "inline-block");
     });
