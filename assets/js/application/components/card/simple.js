App.View.extend({
  name: 'components/card/simple',
  attributes:{
    'class': 'mdl-card mdl-shadow--2dp simple-card',
  },
  data_source:[
    {key: 'title', required: true},
    {key: 'attributes', required: false},
    {key: 'footer_icon', required: false},
    {key: 'footer_action', required:false},
  ],
  init_functions:[
    'setup',
    'setupAttributes',
    'setupFooter',
  ],

  setup: function() {

    this.display = {};

    this.display.title = this.data.title.replaceAll('\n','<br>');
    this.display.content = this.data.content;
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

  setupFooter: function() {
    var footer_action = this.data.footer_action,
        display = this.display;

    if (!footer_action){
      return;
    }

    display.footer_icon = this.data.footer_icon;

    display.footer_action = {
      text: footer_action.get('text'),
      raised: false,
      event_handler: footer_action.get('action'),
    };
  },
});
