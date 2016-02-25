App.View.extend({
  name: 'components/first',
  
  attributes:{
    'class': 'component'
  },
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
