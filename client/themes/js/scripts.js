/*Scripts.js*/

  $(function(){
    // set up model objects
    var library = new Songs(songData);
    var app = new AppModel({library: library});

    // build a view for the top level of the whole app
    var appView = new AppView({model: app});
    console.log(appView);
    //var libraryView = new LibraryView({collection: appView.model.library})

    // put the view onto the screen
    $('.player').append(appView.render());
    $('.library-sidebar').append(appView.libraryView.el);
  });



//Options
var playerScrollSpeed = 4000;

//On Page Ready
$('document').ready(function(){

  setInterval(playerScroll, playerScrollSpeed);


  $('.library-list').on('click', function(){
    $('.queue').slideDown();
  });


  //Radio Marquee
  function playerScroll(speed){

    $('.player-screen-inner .marquee').animate({
      left: "-100%"
    }, playerScrollSpeed, function(){
      //animation complete
      $(this).css('left', '100%');

    });
  };


}); //doc.ready
