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
      color: 'primary',
      event_handler: this.firstButtonClicked
    };

    c.second_button = {
      text: 'Second',
      ripple: true,
      color: 'accent',
    };

    c.third_button = {
      text: 'flight_takeoff',
      raised: false,
      style: 'fab-mini',
      color: 'primary',
    };
  },

  firstButtonClicked: function() {
    console.log('First button event listener',arguments);
  },

});
