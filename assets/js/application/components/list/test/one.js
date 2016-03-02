App.View.extend({
  name: 'components/list/test/one',

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
});
