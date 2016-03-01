App.View.extend({
  name: 'components/list/main',
  tagName: 'ul',
  attributes: {
    'class': 'mdl-list',
  },
  data_source: [
    {key: 'collection', required: true},
    {key: 'attributes', required: false},
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
    var display = this.display;
    this.data.collection.each( function(model) {
      data = {
        model: model,
      };
      display.list_items[model.cid] = data;
    });
  },
});
