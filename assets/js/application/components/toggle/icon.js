App.View.extend({
  name: 'components/toggle/icon',
  tagName: 'label',
  attributes:{
    'class': 'mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect',
  },
  events: {
    'click input': '_onChange',
  },
  data_source:[
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'icon', required: true},
  ],
  init_functions:[
    'setup',
    'setupListeners',
  ],

  setup: function() {
    _.bindAll(this, '_onChange','_handleModelChange');
    this.display = {};
    this.display.id = this.cid+'toggle_icon';
    this.display.icon = this.data.icon;
    this.$el.attr('for',this.display.id);

    this._isChecked = this.data.model.get(this.data.attribute);
  },

  setupListeners: function() {
    this.listenTo(this.data.model,'change:'+this.data.attribute,
                  this._handleModelChange);
  },

  _handleModelChange: function(model,value) {
    console.log(this._isChecked,value);
    // this._isChecked = value
    // if (this._isChecked){
    //   this._setChecked();
    // }
    // else{
    //   this._setUnchecked();
    // }
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
    this.data.model.set(this.data.attribute, this._isChecked);
  },
});
