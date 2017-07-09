$( document ).ready(function() {
    console.log( "ready!" );
    var wall = new Freewall("#container");
    wall.reset({
      draggable: true,
      selector: '.item',
      animate: true,
      keepOrder: true,
      onResize: function() {
        wall.refresh();
      },
      onBlockMove: function() {
        console.log(this);
      }
    });
    wall.fitWidth();
    // for scroll bar appear;
    $(window).trigger("resize");


    $("#addMore").on('click', function(){
      console.log("adding");
      wall.appendBlock("<div class='item'> <img src='"+getImageURl()+"'</div>");
      console.log("refresh");
      wall.refresh();
      wall.fitWidth();
    });



});
getImageURl = function(){
  console.log("url");
  var url = "https://unsplash.it/"+randomSize()+ "/"+randomSize();
  console.log(url);
  return url;
}
randomSize = function ()
{
return Math.floor(Math.random() * (299 - 150)) + 150;

}
