App.View.extend({
  name: 'components/button/main',
  tagName: 'button',
  attributes:{
    'class': 'mdl-button mdl-js-button',
  },
  events:{
    'click': '_onClick',
  },
  init_functions:[
    'setup',
  ],
  data_source:[
    {key: 'text',required:true},
    {key: 'event_handler',required:false},
  ],

  setup: function() {

    _.bindAll(this,'_onClick');
    
    this.text = this.data.text;
  },

  _onClick: function() {
    console.log(this.text+' button was clicked.');
  },
});
