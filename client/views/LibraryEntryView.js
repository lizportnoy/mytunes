// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function(){

    this.model.on('change:playcount', function(){

      console.log('library increment');
      this.render();
    }, this);
  },

  tagName: 'li class="clearfix"',

  template: _.template($('.template-list-item').html()),

  events: {

    'click': function() {
      this.render();

      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
