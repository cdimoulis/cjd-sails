/****
* NOTE
* Radio groups are based on passing the same model
* and attribute name to multiple radio buttons on a page.
* Value is required to know what value should be placed in three
* model's attribute when selection occurs
****/
App.View.extend({
  name: 'components/toggle/radio',
  tagName: 'label',
  attributes:{
    'class': 'mdl-radio mdl-js-radio mdl-js-ripple-effect',
  },
  events: {
    'click input': '_onChange',
  },
  data_source:[
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'value', required: true},
    {key: 'label', required: false, default: ''},
  ],
  init_functions:[
    'setup',
    'setupListeners',
  ],

  setup: function() {
    _.bindAll(this, '_onChange','_handleModelChange');

    this.display = {
      id: this.cid+'radio',
      label: this.data.label,
      group: this.data.model.cid+""+this.data.attribut,
      value: this.data.value,
    };
    this.$el.attr('for',this.display.id);

    this._isChecked = this.data.model.get(this.data.attribute) == this.data.value;
  },

  setupListeners: function() {
    this.listenTo(this.data.model,'change:'+this.data.attribute,
                  this._handleModelChange);
  },

  _handleModelChange: function(model,value) {
    this._isChecked = value == this.data.value
    if (this._isChecked){
      this._setChecked();
    }
    else{
      this._setUnchecked();
    }
  },

  _setChecked: function() {
    this.$el.addClass('is-checked');
    this.$el.find('input').attr('checked',true);
  },

  _setUnchecked: function() {
    this.$el.removeClass('is-checked');
    this.$el.find('input').attr('checked',false);
  },

  _onChange: function(e) {
    this._isChecked = !this._isChecked;
    this.data.model.set(this.data.attribute, this.data.value);
  },
});
