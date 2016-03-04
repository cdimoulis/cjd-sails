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
    _.bindAll(this, 'buildConfigs', '_addListItem', '_removeListItem');
    this._views = {};

    this.listenTo(this.data.collection, 'add', this._addListItem);
    this.listenTo(this.data.collection, 'remove', this._removeListItem);

    this.listenTo(this,'rendered',this.buildConfigs);
  },

  buildConfigs: function() {
    var _this = this;
    this.data.collection.each( function(model) {
      _this._addListItem(model);
    });
  },

  _addListItem: function(model) {
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
    });
  },
});
