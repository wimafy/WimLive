$(document).on("pagecreate","#pageone",function(){
  $("p").on("swipeleft",function(){
    $(this).hide();
alert("wee");
  });
});