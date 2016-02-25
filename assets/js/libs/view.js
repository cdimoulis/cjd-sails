Backbone.View = Backbone.View.extend({

  initialize: function(options){
    var _this = this;
    options = options || {}
    this.template = App.Templates[this.name];
    this.data = {};

    this._processData(options.hash || {});
    this._processInitFunctions();
    this._processAttributes();
  },


  _processData: function(hash) {
    var val, 
    _this = this,
    data = hash.data || {};

    _.each(this.data_source, function(source) {

      if (source.required){
        if (_.isUndefined(data[source.key]) || _.isNull(data[source.key])){
          throw 'View '+_this.name+' requires data source '+source.key;
          return;
        }
      }

      val = data[source.key];
      if (_.isUndefined(val) || _.isNull(val)){
        val = source.default;
      }

      _this.data[source.key] = val
    });

  },

  _processInitFunctions: function() {
    var _this = this;

    if (!_.isUndefined(this.init_functions) && !_.isNull(this.init_functions) &&
        !_.isEmpty(this.init_functions)){

      _.each(this.init_functions, function(func) {

        if (!_this[func] && !_.isFunction(_this[func])){
          throw 'View '+this.name+' does not contain function: '+func;
          return;
        }
        _.bindAll(_this,func);

        _this[func].call(this);
      });
    }
  },

  _processAttributes: function() {
    this.$el.attr('data-view-name',this.name);
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
