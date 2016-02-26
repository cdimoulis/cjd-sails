App.View.extend({
  name: 'components/button/primary',
  tagName: 'button',
  attributes:{
    'class': 'mdl-button mdl-js-button',
  },
  events:{
    'click': '_onClick',
  },
  init_functions:[
    'setup',
    'determinClasses',
  ],
  data_source:[
    {key: 'text', required: true},
    {key: 'raised', required: false, default: true, options: [true,false]},
    {key: 'ripple', required: false, default: true, options: [true,false]},
    {key: 'style', required: false, options: ['primary','accent']},
    {key: 'event_handler', required: false},
  ],

  setup: function() {

    _.bindAll(this,'_onClick');

    this.display = {}
    this.display.text = this.data.text;
  },

  determinClasses: function() {
    if (this.data.raised) {
      this.$el.addClass('mdl-button--raised');
    }

    switch(this.data.style) {
      case 'primary': {
        this.$el.addClass('mdl-button--primary');
        break;
      }
      case 'accent': {
        this.$el.addClass('mdl-button--accent');
        break;
      }
    }

    if (this.data.ripple) {
      this.$el.addClass('mdl-js-ripple-effect');
    }

  },

  _onClick: function(e) {
    if (_.has(this.data, 'event_handler') && _.isFunction(this.data.event_handler)) {
      this.data.event_handler(e);
    }
  },
});
