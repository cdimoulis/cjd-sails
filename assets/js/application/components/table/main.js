/*******
* The tables shown on https://www.getmdl.io/components/index.html#tables-section
* are actually begin depricated per https://github.com/google/material-design-lite/wiki/Deprecations#automatic-selection-checkboxes
* thus using the new way
*******/
App.View.extend({
  name: 'components/table/main',
  data_source: [
    {key: 'collection', required: true},
    {key: 'columns', required: true},
    {key: 'selectable', required: false, default: false},
    {key: 'selected', required: false},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, 'buildRows', '_addRow', '_removeRow', '_handleRowSelection');
    this.display = {};
    this.components = {};
    this._rows = {};
    this.data.selected = this.data.selected || new App.Collection();
    this.header_checkbox = new App.Model({
      selected: this.data.selected.length == this.data.collection.length
    });
    this.display.columns = this.data.columns

    this.listenTo(this,'rendered',this.buildRows);
    this.listenTo(this.data.collection, 'add', this._addRow);
    this.listenTo(this.data.collection, 'remove',this._removeRow);

    this.components.checkbox = {
      model: this.header_checkbox,
      attribute: 'selected',
      attributes: new App.Model({
        'class': 'mdl-data-table__select',
      }),
    };
    window.table = this;
  },

  buildRows: function() {
    var _this = this;
    this.data.collection.each( function(model,index) {
      _this._addRow(model,index+1);
    });
  },

  _addRow: function(model,index) {
    var data = {
      model: model,
      header_checkbox: this.header_checkbox,
      columns: this.data.columns,
      selectable: this.data.selectable,
    };

    var row = this.addView('components/table/row', data, 'tbody');
    this.listenTo(row,'selected',this._handleRowSelection);
    this._rows[model.cid] = row;
    componentHandler.upgradeElement(row.el);
  },

  _removeRow: function(model) {
    var _this = this;
    var row = this._rows[model.cid];
    row.$el.fadeOut(400,function() {
      _this.removeView(row);
    });
  },

  _handleRowSelection: function(model,value) {
    console.log('selected',value,model.get('name'));
    if (value) {
      this.data.selected.add(model);
    }
    else {
      this.data.selected.remove(model);
    }
  },
});
