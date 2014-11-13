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


$('document').ready(function(){

$('ul li').append('<span>play</span>');

});
