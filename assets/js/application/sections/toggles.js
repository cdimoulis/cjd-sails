App.View.extend({
  name: 'sections/toggles',

  init_functions: [
    'setupCheckboxes',
    'setupRadios',
  ],

  setupCheckboxes: function(){
    this.components = c = {};
    m = new App.Model({second: true});

    c.checkbox_one = {
      model: m,
      attribute: 'first',
      label: 'First',
    };

    c.checkbox_two = {
      model: m,
      attribute: 'second',
      label: 'Second',
    };
  },

  setupRadios: function(){
    c = this.components;
    m = new App.Model({gender: 'female'});
    window.model = m;

    c.radio_one = {
      model: m,
      attribute: 'gender',
      label: 'Male',
      value: 'male',
    };

    c.radio_two = {
      model: m,
      attribute: 'gender',
      label: 'Female',
      value: 'female',
    };

    c.radio_three = {
      model: m,
      attribute: 'three',
      label: 'Third',
      value: 'party',
    };
  },
});
