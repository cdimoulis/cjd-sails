App.View.extend({
  name: 'components/list/list_item',
  tagName: 'li',
  attributes: {
    'class': 'mdl-list__item',
  },
  data_source: [
    {key: 'model', required: true},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.display = {
      text: this.data.model.get('text'),
    };
  },
})
