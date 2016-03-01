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
    '_buildConfigs',
  ],

  setup: function() {
    this.display = {
      list_items: {},
    };
  },

  _buildConfigs: function() {
    var _this = this;
    this.data.collection.each( function(model) {
      data = {
        model: model,
        view: _this.data.view,
        view_data: _this.data.view_data,
      };
      _this.display.list_items[model.cid] = data;
    });
  },
});
