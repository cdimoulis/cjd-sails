App.View.extend({
  name: 'sections/buttons',

  init_functions: [
    'setupButtons',
  ],

  setupButtons: function(){

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
      style: 'fab',
      color: 'primary',
    };

    c.fourth_button = {
      text: 'flight_landing',
      style: 'fab-mini',
      color: 'accent',
    };
  },

  firstButtonClicked: function() {
    console.log('First button event listener',arguments);
  },
});
