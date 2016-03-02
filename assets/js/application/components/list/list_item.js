App.View.extend({
  name: 'components/list/list_item',
  tagName: 'li',
  attributes: {
    'class': 'mdl-list__item',
    'style': 'display: none',
  },
  events: {
    'rendered': '_rendered',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'view', required: true},
    {key: 'view_data', required: true},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_rendered');
    var data = this.data.view_data;
    data.model = this.data.model;
    this.display = {
      view: this.data.view,
      data: data,
    };
  },

  _rendered: function() {
    this.$el.fadeIn();
  },
})
