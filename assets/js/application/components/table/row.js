App.View.extend({
  name: 'components/table/row',
  tagName: 'tr',
  // attributes:{
  //   'style': 'display: none',
  // },
  events: {
    'rendered': '_rendered',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'columns', required: true},
    {key: 'selectable', required: false, default: false},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this,'_rendered')
    var _this = this;
    this.display = {};
    this.components = {};
    var checkbox = new App.Model();

    this.display.td = [];
    _.each( this.data.columns, function(column){
      _this.display.td.push({
        name: column,
        data: _this.data.model.get(column),
      });
    });

    this.components.checkbox = {
      model: checkbox,
      attribute: 'selected',
      attributes: new App.Model({
        'class': 'mdl-data-table__select',
      }),
    };
  },

  _rendered: function() {
    // this.$el.fadeIn();
    componentHandler.upgradeElement(this.el);
  },
})
