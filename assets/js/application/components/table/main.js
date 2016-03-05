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
    _.bindAll(this, 'buildRows', '_addRow', '_removeRow', '_handleRowSelection',
                  '_handleHeaderCheck', '_clearAll');
    var _this = this;
    this.display = {};
    this.components = {};
    this._rows = {};
    this.data.selected = this.data.selected || new App.Collection();
    this.header_checkbox = new App.Model({
      selected: this.data.selected.length == this.data.collection.length
    });

    // Setup Display data
    this.display.columns = this.data.columns

    // Setup component data
    this.components.checkbox = {
      model: this.header_checkbox,
      attribute: 'selected',
      attributes: new App.Model({
        'class': 'mdl-data-table__select',
      }),
    };

    // Setup the event listeners
    this.listenTo(this,'rendered',this.buildRows);
    this.listenTo(this.data.collection, 'sync', this.buildRows);
    this.listenTo(this.data.collection, 'add', this._addRow);
    this.listenTo(this.data.collection, 'remove', this._removeRow);
    this.listenTo(this.data.collection, 'reset', function() {
      _this._clearAll();
      _this.buildRows();
    })
    this.listenTo(this.data.selected,'add', function(model) {
      var row = _this._rows[model.cid];
      _this.trigger('select:'+row.cid, model, true);
      _this._handleHeaderCheck();
    });
    this.listenTo(this.data.selected, 'remove', function(model) {
      var row = _this._rows[model.cid];
      _this.trigger('select:'+row.cid, model, false);
      _this._handleHeaderCheck()
    });
    this.listenTo(this.data.selected, 'reset', function() {
      _this.trigger('select:all', _this.header_checkbox, false);
      _this.data.selected.each( function(model) {
        var row = _this._rows[model.cid];
        if (!row){
          _this.data.selected.remove(model);
        }
        else{
          _this.trigger('select:'+row.cid, model, true);
        }
      });
      _this._handleHeaderCheck();
    });
    this.listenTo(this.header_checkbox, 'change:selected', function(model, value, options) {
      var silent = options["_local_silent:"+_this.cid];
      if (!silent){
        _this.trigger('select:all', model, value);
        if (value) {
          _this.data.selected.add(_this.data.collection.models);
        }
        else {
          _this.data.selected.reset();
        }
      }
    });
  },

  buildRows: function() {
    var _this = this;
    this.data.collection.each( function(model,index) {
      _this._addRow(model,index+1);
    });
  },

  _addRow: function(model,index) {
    if (_.has(this._rows,model.cid)){
      return;
    }

    var data = {
      model: model,
      columns: this.data.columns,
      selectable: this.data.selectable,
      selected: this.data.selected.contains(model),
    };

    var row = this.addView('components/table/row', data, 'tbody');
    this.listenTo(row,'selected',this._handleRowSelection);
    this._rows[model.cid] = row;
    componentHandler.upgradeElement(row.el);
  },

  _removeRow: function(model) {
    var _this = this;
    var row = this._rows[model.cid];
    this.data.selected.remove(model);
    row.$el.fadeOut(400,function() {
      _this.removeView(row);
      delete _this._rows[model.cid];
      _this._handleHeaderCheck()
    });
  },

  _handleRowSelection: function(model,value) {
    if (value) {
      this.data.selected.add(model);
    }
    else {
      this.data.selected.remove(model);
    }
    this._handleHeaderCheck()
  },

  _handleHeaderCheck: function() {
    opts = {};
    opts["_local_silent:"+this.cid] = true;
    if (this.data.collection.length != 0 &&
        this.data.selected.length == this.data.collection.length) {
      this.header_checkbox.set({'selected': true}, opts);
    }
    else {
      this.header_checkbox.set({'selected': false}, opts);
    }
  },

  _clearAll: function() {
    var _this = this;
    this.data.selected.reset();
    _.each(this._rows, function(row, key) {
      row.$el.fadeout(400,function() {
        _this.removeView(row);
        _this._handleHeaderCheck();
      });
    });
    this._rows = {};
  },
});
