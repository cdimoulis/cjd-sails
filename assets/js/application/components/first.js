App.View.extend({
  name: 'components/first',
  init_functions: [
    'setup'
  ],

  data_source: [
    {key: 'a', required: true},
    {key: 'b', required: false, default: 'View'}
  ],

  value: 'first view',

  setup: function() {
    console.log('setup function for',this.name);
  }
})
