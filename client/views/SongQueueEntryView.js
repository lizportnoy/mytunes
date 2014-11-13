// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'li.entry',

  template: _.template('(<%= artist %>)<%= title %> <%= playcount%><span> ---Add to Queue</span>'),


  initialize: function(){
    this.model.on('change:playcount', function(){
      console.log('queue increment');
      this.render();
    }, this);

  },


  events: {
    'click': function() {
      this.model.dequeue();
      this.render();
    },
    'ended' : function(){
      this.model.play();
    }
  },





  render: function(){

    //console.log(this.model.attributes.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }


});
