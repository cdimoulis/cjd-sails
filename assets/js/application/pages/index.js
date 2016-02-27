App.Page.extend({
  name: 'pages/index',

  init_functions: [
    'setupButtons',
    'setupInputs',
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
      raised: false,
      style: 'fab-mini',
      color: 'primary',
    };
  },

  firstButtonClicked: function() {
    console.log('First button event listener',arguments);
  },

  setupInputs: function() {

    m = new App.Model({text:''});
    this.listenTo(m,'change',function(){
      console.log('model text:', m.get('text'));
    })

    this.components.input_one = {
      model: m,
      attribute: 'text',
      label: 'Name',
    };
  },

});
