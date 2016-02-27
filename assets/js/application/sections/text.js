App.View.extend({
  name: 'sections/text',

  init_functions: [
    'setupInputs',
    'setupExpandables',
  ],

  setupInputs: function(){
    this.components = c = {};
    m = new App.Model({first:'', second: 'Dimoulis'});
    this.listenTo(m,'change:second',function(model,change){
      console.log('model second change',change);
    });

    c.input_one = {
      model: m,
      attribute: 'first',
      label: 'First Name...',
    };

    c.input_two = {
      model: m,
      attribute: 'second',
      label: 'Last Name...',
      float_label: true,
      pattern: 'alpha',
      error_msg: 'Only letters allows',
    };

    c.input_three = {
      model: m,
      attribute: 'third',
      label: 'Phone Number',
      pattern: 'phone_number',
      error_msg: "Not a valid phone number",
    };

    c.input_four = {
      model: m,
      attribute: 'fourth',
      label: 'Description',
      float_label: true,
      rows: 3,
    };
  },

  setupExpandables: function() {
    c = this.components;
    m = new App.Model({});

    c.expand_one = {
      model: m,
      attribute: 'name',
      label: 'Name',
      icon: 'person',
    };

    c.expand_two = {
      model: m,
      attribute: 'example',
      label: 'Example',
      icon: 'help',
    };
  },
});
