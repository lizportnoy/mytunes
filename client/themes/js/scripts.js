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

  $('.toggle-library').on('click', toggleLibrary);

  setInterval(playerScroll, playerScrollSpeed);


  $('.toggle-queue').on('click', toggleQueue);
  $('.library-list').on('click', function(){
    if(!$('.library-list').hasClass('queued')){
      toggleQueue();
      $('.library-list').addClass('queued');
    }
  });


  //Radio Marquee
  function playerScroll(speed){
    $('.player-screen-inner .marquee').animate({
      left: "-1000px"
    }, playerScrollSpeed, "linear", function(){
      //animation complete
      $(this).css('left', '100%');

    });
  };

  // display library

 function toggleLibrary() {

    if($('.library-sidebar').hasClass("active")) {
      $('.library-sidebar').animate({
        left: "2px"
      },750,function () {
        //animation complete
      }).removeClass("active");
    } else {
      $('.library-sidebar').animate({
        left: "-198px"
      },750, function (){
        //animation complete
      }).addClass("active");
    }
  }


function toggleQueue(){
      if($('.queue').hasClass('active')) {
      $('.queue').slideUp().removeClass('active');
    } else {
      $('.queue').slideDown().addClass('active');
    }
}



}); //doc.ready
