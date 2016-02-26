App.Page.extend({
  name: 'pages/index',

  init_functions: [
    'setup'
  ],

  setup: function(){

    _.bindAll(this,'firstButtonClicked');

    this.components = c = {};

    c.first_button = {
      text: 'First',
      ripple: true,
      style: 'primary',
      event_handler: this.firstButtonClicked
    };

    c.second_button = {
      text: 'Second',
      ripple: true,
    };

    c.third_button = {
      text: 'Third',
      raised: false,
      style: 'accent',
    };
  },

  firstButtonClicked: function() {
    console.log('First button event listener',arguments);
  },

});
