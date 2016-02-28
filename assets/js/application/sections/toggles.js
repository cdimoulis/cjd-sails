App.View.extend({
  name: 'sections/toggles',

  init_functions: [
    'setupCheckboxes',
    'setupRadios',
    'setupIcons',
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
  },

  setupIcons: function(){
    c = this.components;
    m = new App.Model({power: true});
    window.model = m;

    c.icon_one = {
      model: m,
      attribute: 'bold',
      icon: 'B'
    };

    c.icon_two = {
      model: m,
      attribute: 'power',
      icon: 'power_settings_new',
    };
  },
});
