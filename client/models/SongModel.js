// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    //this.attributes.playcount = 0;
    this.set('playcount', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function (){
    this.trigger('enqueue', this);
  },

  dequeue: function (){
    this.trigger('dequeue', this);
  },

  incrementPlaycount : function () {
    this.set('playcount', this.get('playcount')+1);
  }


});
