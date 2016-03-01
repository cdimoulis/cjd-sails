App.View.extend({
  name: 'components/text/expandable',
  attributes: {
    'class': 'mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label',
  },
  events: {
    'input input': '_onInput',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'icon', required: true},
    {key: 'label', required: false, default: ''},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    this.display = {
      label: this.data.label,
      id: this.cid+'expandable_input',
      value: this.data.model.get(this.data.attribute),
      icon: this.data.icon,
    };

    this.listenTo(this.data.model,'change:'+this.data.attribute,
                  this._handleModelUpdate);
  },

  _handleModelUpdate: function(model,value){
    var val = this.data.model.get(this.data.attribute);
    this.$el.find('input#'+this.display.id).val(val);
    if (_.isEmpty(val)){
      this.$el.removeClass('is-dirty');
    }
    else{
      this.$el.addClass('is-dirty');
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
