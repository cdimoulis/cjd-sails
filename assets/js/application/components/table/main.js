App.View.extend({
  name: 'components/table/main',
  // attributes: {
  //   'class': 'mdl-data-table mdl-js-data-table mdl-shadow--2dp',
  // },
  events: {
    'rendered': 'buildRows',
  },
  data_source: [
    {key: 'collection', required: true},
    {key: 'columns', required: true},
    {key: 'selectable', required: false, default: false},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, 'buildRows', '_addRow', '_removeRow');
    this.display = {};
    this._rows = {};

    this.display.columns = this.data.columns
    if (this.data.selectable){
      this.display.class = 'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp';
    }
    else{
      this.display.class = 'mdl-data-table mdl-js-data-table mdl-shadow--2dp';
    }

    this.listenTo(this.data.collection, 'add', this._addRow);
    this.listenTo(this.data.collection, 'remove',this._removeRow);
  },

  buildRows: function() {
    var _this = this;
    this.data.collection.each( function(model) {
      _this._addRow(model);
    });
  },

  _addRow: function(model) {
    var data = {
      model: model,
      columns: this.data.columns,
      selectable: this.data.selectable,
    };

    var row = this.addView('components/table/row', data, 'tbody');
    this._rows[model.cid] = row;
    componentHandler.upgradeElement(row.el);
  },

  _removeRow: function(model) {
    var _this = this;
    var row = this._rows[model.cid];
    row.$el.fadeOut(400,function() {
      _this.removeView(view);
    });
  },
});
