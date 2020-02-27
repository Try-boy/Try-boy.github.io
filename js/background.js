$(document).ready(
     function()
     {
      var width=screen.availWidth;
      var height=screen.availHeight;
      var ma=(-width)/2+"px";
    $("#sky").width(width).height(height)
    $("#sky").css("position","relative")
    $("#sky").css("top","0%").css("left","50%");
    $("#sky").css("margin-left",ma);
    }
);
function qq1(){
  $(".con-image").fadeIn();
}
function qq2(){    
  $(".con-image").fadeOut();  
}
function wei1(){
  $(".con-image2").fadeIn();
}
function wei2(){
  $(".con-image2").fadeOut();
}