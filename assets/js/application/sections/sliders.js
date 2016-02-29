App.View.extend({
  name: 'sections/sliders',

  init_functions: [
    'setup',
  ],

  setup: function() {
    m = new App.Model({number:42});
    this.components = c = {}
    window.model = m;
    c.slider_one = {
      model: m,
      attribute: 'count',
    };

    c.slider_two = {
      model: m,
      attribute: 'number',
      max: 90,
      min: 10,
      step: 2,
    };
  },
});
