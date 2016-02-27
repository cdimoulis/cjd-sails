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
    {key: 'color', required: false, default: true, options: ['primary','accent']},
    {key: 'style', required: false, options: ['fab','fab-mini','icon']},
    {key: 'fab', required: false, default: false, options: [true,false]},
    {key: 'icon', required: false, default: false, options: [true,false]},
    {key: 'event_handler', required: false},
  ],

  setup: function() {

    _.bindAll(this,'_onClick');

    this.display = {}
    this.display.text = this.data.text;
    this.display.icon = false;
  },

  determinClasses: function() {
    if (this.data.raised) {
      this.$el.addClass('mdl-button--raised');
    }

    switch(this.data.color) {
      case 'primary': {
        this.$el.addClass('mdl-button--primary');
        break;
      }
      case 'accent': {
        this.$el.addClass('mdl-button--accent');
        break;
      }
    }

    switch(this.data.style){
      case 'fab': {
        this.$el.addClass('mdl-button--fab');
        this.display.icon = true;
        break;
      }
      case 'fab-mini': {
        this.$el.addClass('mdl-button--fab');
        this.$el.addClass('mdl-button--mini-fab');
        this.display.icon = true;
        break;
      }
      case 'icon': {
        this.$el.addClass('mdl-button--icon');
        this.display.icon = true;
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
