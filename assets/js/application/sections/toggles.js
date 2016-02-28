App.View.extend({
  name: 'sections/toggles',

  init_functions: [
    'setupToggles',
  ],

  setupToggles: function(){
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
});
