/*Scripts.js*/

      $(function(){
        // set up model objects
        var library = new Songs(songData);
        var app = new AppModel({library: library});

        // build a view for the top level of the whole app
        var appView = new AppView({model: app});

        // put the view onto the screen
        $('.player').append(appView.render());
      });

//Options
//

var playerScrollSpeed = 4000;



$('document').ready(function(){

setInterval(playerScroll, playerScrollSpeed);

  
$('.library-list').on('click', function(){
  $('.queue').slideDown();
});


function playerScroll(speed){

  var width = $('.player-screen-inner').innerWidth();

  $('.player-screen-inner .marquee').animate({
    left: (width*2)*(-1)
  }, playerScrollSpeed, function(){
    //animation complete
    $(this).css('left', '100%');

  });

}


});
