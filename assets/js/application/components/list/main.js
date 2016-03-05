App.View.extend({
  name: 'components/list/main',
  tagName: 'ul',
  attributes: {
    'class': 'mdl-list',
  },
  data_source: [
    {key: 'collection', required: true},
    {key: 'attributes', required: false},
    {key: 'view', required: true},
    {key: 'view_data', required: true},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, 'buildItems', '_addListItem', '_removeListItem',
              '_clearAll');
    var _this = this;
    this._views = {};

    this.listenTo(this.data.collection, 'sync', this.buildItems);
    this.listenTo(this.data.collection, 'add', this._addListItem);
    this.listenTo(this.data.collection, 'remove', this._removeListItem);
    this.listenTo(this.data.collection, 'reset', function() {
      _this._clearAll();
      _this.buildItems();
    });
    this.listenTo(this.data.collection, 'sort', function() {
      _this._clearAll();
      _this.buildItems();
    });
    this.listenTo(this, 'rendered', this.buildItems);
  },

  buildItems: function() {
    var _this = this;
    this.data.collection.each( function(model) {
      _this._addListItem(model);
    });
  },

  _addListItem: function(model) {
    if (_.has(this._views, model.cid)){
      return;
    }

    var data = {
      model: model,
      view: this.data.view,
      view_data: this.data.view_data,
    };

    var view = this.addView('components/list/list_item', data, 'div.list-content');
    this._views[model.cid] = view;
  },

  _removeListItem: function(model) {
    var _this = this;
    var view = this._views[model.cid];
    view.$el.fadeOut(400,function(){
      _this.removeView(view);
      delete _this._views[model.cid];
    });
  },

  _clearAll: function() {
    var _this = this;
    _.each(this._views, function(view, key) {
      view.$el.fadeOut(400, function() {
        _this.removeView(view);
      });
    });
    this._views = {};
  },
});
