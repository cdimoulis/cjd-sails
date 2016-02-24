App.View.extend({
  name: 'components/first',

  value: 'first view',

  setup: function() {
    console.log('setup',this.name);
  }
})