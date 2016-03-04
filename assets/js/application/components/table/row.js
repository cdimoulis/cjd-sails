App.View.extend({
  name: 'components/table/row',
  tagName: 'tr',
  attributes:{
    'style': 'display: none',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'header_checkbox', required: false},
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
    var checkbox = new App.Model();

    this.components.checkbox = {
      model: checkbox,
      attribute: 'selected',
      attributes: new App.Model({
        'class': 'mdl-data-table__select',
      }),
    };

    this.listenTo(this,'rendered',this._rendered);
    this.listenTo(this.data.model,'change',function() {
      _this.buildRowData();
      _this.render()
    });
    this.listenTo(checkbox,'change:selected',this._triggerSelection);
    this.listenTo(this.data.header_checkbox,'change:selected',function(model,value) {
      checkbox.set('selected',value);
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

  _triggerSelection: function(model,value) {
    this.trigger('selected',this.data.model,value);
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
