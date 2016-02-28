App.View.extend({
  name: 'components/text/area',
  attributes:{
    'class': 'mdl-textfield mdl-js-textfield',
  },
  events: {
    'input textarea': '_onInput',
  },
  data_source:[
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'label', required: false, default: ''},
    {key: 'float_label', required: false, default: false},
    {key: 'rows', required: false, default: 5},
  ],
  init_functions:[
    'setup',
  ],

  setup: function() {
    this.display = {};
    this.display.label = this.data.label;
    this.display.id = this.cid+'text_area';
    this.display.value = this.data.model.get(this.data.attribute);
    this.display.rows = this.data.rows;

    if (this.data.float_label) {
      this.$el.addClass('mdl-textfield--floating-label');
    }
  },

  _onInput: function(e) {
    // Update the value in the model
    if (!this.$el.hasClass('is-invalid')){
      var val = e.target.value;
      this.data.model.set(this.data.attribute,val);
    }
  },
});
