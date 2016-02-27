App.View.extend({
  name: 'components/text/expandable',
  attributes:{
    'class': 'mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label',
  },
  events: {
    'input input': '_onInput',
  },
  data_source:[
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'icon', required: true},
    {key: 'label', required: false, default: ''},
  ],
  init_functions:[
    'setup',
  ],

  setup: function() {
    this.display = {};
    this.display.label = this.data.label;
    this.display.id = this.cid+'expandable_input';
    this.display.value = this.data.model.get(this.data.attribute);
    this.display.icon = this.data.icon;
  },

  _onInput: function(e) {
    // Update the value in the model
    if (!this.$el.hasClass('is-invalid')){
      var val = e.target.value;
      this.data.model.set(this.data.attribute,val);
    }
  },
});
