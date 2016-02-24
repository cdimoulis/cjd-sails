Backbone.View = Backbone.View.extend({

  initialize: function(options){
    this.template = App.Templates[this.name];
    var _this = this;

    if (!!options){
      _.each(options, function(val,key){
        _this[key] = val;
      });
    }

    if (!!this.setup){
      this.setup();
    }
  },

  render: function() {
    this.$el.html(this.template(this));
    return this;
  },

  appendTo: function(selector) {
    this.$el.appendTo(selector);
    return this;
  }
});