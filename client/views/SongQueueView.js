// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "ul.queue",

  //template: _.template('<ul><%= %></div>'),

  initialize: function() {
    this.render();

    this.collection.on('add', function(model){
      this.render();

      if(this.collection.length === 1){
        this.collection.at(0).play();
      }


    }, this);

    this.collection.on('remove', function(model){
      if(this.collection.length > 0){
        this.collection.at(0).play();
      }

      this.render();
    }, this);


  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<h2>Queue</h2>').append(
      this.collection.map(function(song){

        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
