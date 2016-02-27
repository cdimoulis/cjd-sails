App.View.extend({
  name: 'components/text/input',
  attributes:{
    'class': 'mdl-textfield mdl-js-textfield',
  },
  events: {
    'input input': '_test',
  },
  data_source:[
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'label', required: false, default: ''},
  ],
  init_functions:[
    'setup',
  ],

  setup: function() {

    this.display = {};
    this.display.label = this.data.label;
    this.display.id = this.cid+'text_input';
    this.display.text = this.data.model.get(this.data.attribute);

    console.log('input',this.display.label);
  },

  _test: function(e) {
    // Update the value in the model
    var val = e.target.value;
    this.data.model.set(this.data.attribute,val);
  }
});
