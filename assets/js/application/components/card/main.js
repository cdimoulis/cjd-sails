App.View.extend({
  name: 'components/card/main',
  attributes:{
    'class': 'mdl-card mdl-shadow--2dp',
  },
  data_source:[
    {key: 'title', required: true},
    {key: 'attributes', required: false},
    {key: 'content', required: false},
    {key: 'menu_icons', required: false},
    {key: 'footer_actions', required:false},
  ],
  init_functions:[
    'setup',
    'setupAttributes',
    'setupMenu',
    'setupFooter',
  ],

  setup: function() {
    this.display = {
      title: this.data.title,
      content: this.data.content,
    };
  },

  setupAttributes: function() {
    var _this = this;
    if (!this.data.attributes){
      return;
    }
    _.each(this.data.attributes.attributes,function(val,attr){
      if (attr == 'class'){
        _this.$el.addClass(val);
      }
      else{
        _this.$el.attr(attr,val);
      }
    });
  },

  setupMenu: function() {
    var menu_icons = this.data.menu_icons,
        display = this.display;

    if (!menu_icons){
      return;
    }

    display.menu_icon_buttons = [];
    menu_icons.each( function(menu) {
      var c = {
        text: menu.get('icon'),
        icon: true,
        style: 'icon',
        event_handler: menu.get('action'),
      };
      display.menu_icon_buttons.push(c);
    });
  },

  setupFooter: function() {
    var footer_actions = this.data.footer_actions,
        display = this.display;

    if (!footer_actions){
      return;
    }

    display.footer_actions = [];
    footer_actions.each( function(button) {
      var c = {
        text: button.get('text'),
        color: 'primary',
        // ripple: true,
        raised: false,
        event_handler: button.get('action'),
      }
      display.footer_actions.push(c);
    });
  },
});
