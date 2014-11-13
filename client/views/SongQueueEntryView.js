// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'ul',

  template: _.template('<li>(<%= artist %>)<%= title %><span> ---Add to Queue</span></li>'),


  initialize: function(){
  },


  events: {
    'click': function() {
      this.model.dequeue();
      console.log(this);
    },
    'ended' : function(){
      console.log(this.model);
      this.model.play();
    }
  },



  render: function(){

    //console.log(this.model.attributes.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }


});
