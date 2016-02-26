App.Page.extend({
  name: 'pages/index',

  init_functions: [
    'setup'
  ],

  setup: function(){

    this.components = c = {};

    c.first_button = {
      text: 'First',
    };

    c.second_button = {
      text: 'Second',
    };

    c.third_button = {
      text: 'Third',
    };
  },

});
