$(document).ready(
function()
    {
  var artical=document.getElementsByClassName("html");
  var divid=document.getElementsByClassName("divid");
  var top=2; 
  var top2=20;
  for(var i=0;i<artical.length;i++)
  {
  artical[i].style.position="absolute";
   artical[i].style.top=top+i*20+"%";
  //  if(i<artical.length-1)
  //  {
  //   divid[i].style.position="absolute";
  //   divid[i].style.top=top2+"%";
  //  }
   }
  }
);