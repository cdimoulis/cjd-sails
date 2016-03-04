App.View.extend({
  name: 'components/table/row',
  tagName: 'tr',
  attributes:{
    'style': 'display: none',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'columns', required: true},
    {key: 'selectable', required: false, default: false},
  ],
  init_functions: [
    'setup',
    'buildRowData',
  ],

  setup: function() {
    _.bindAll(this,'_triggerSelection', '_rendered')
    var _this = this;
    this.display = {};
    this.components = {};
    this.checkbox = new App.Model();

    this.components.checkbox = {
      model: this.checkbox,
      attribute: 'selected',
      attributes: new App.Model({
        'class': 'mdl-data-table__select',
      }),
    };

    // Setup the event listeners
    this.listenTo(this,'rendered',this._rendered);
    this.listenTo(this.data.model,'change',function() {
      _this.buildRowData();
      _this.render()
    });
    this.listenTo(this.checkbox,'change:selected',this._triggerSelection);
    this.listenTo(this.parent,'select:all select:'+this.cid,function(model, value) {
      opts = {};
      opts["_local_silent:"+_this.cid] = true;
      _this.checkbox.set({'selected': value}, opts);
    });
  },

  buildRowData: function() {
    var _this = this;
    this.display.td = []
    _.each( this.data.columns, function(column){
      _this.display.td.push({
        name: column,
        data: _this.data.model.get(column),
      });
    });
  },

  _triggerSelection: function(model, value, options) {
    silent = !!options["_local_silent:"+this.cid];
    if (!silent) {
      this.trigger('selected',this.data.model,value);
    }
    if (value) {
      this.$el.addClass('is-selected');
    }
    else {
      this.$el.removeClass('is-selected');
    }
  },

  _rendered: function(e,view) {
    this.$el.fadeIn();
  },
});
