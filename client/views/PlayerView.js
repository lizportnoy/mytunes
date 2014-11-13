// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  //tagname: 'div class="player-controls"'
  //template : _.template(),

  initialize: function() {

  },

  setSong: function(song){
    this.model = song;
    this.render();

    $('.marquee').empty().append('<span class="artist">'+song.attributes.artist+'</span><span class="song-title">'+song.attributes.title+'</span');
    console.log(song);
  },

  events: {
    'ended': function() {
      this.model.incrementPlaycount();
      //this.model.dequeue();
    }
  },

  songEnded: function(){
    // Listen for 'ended' https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events


  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
