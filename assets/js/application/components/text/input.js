App.View.extend({
  name: 'components/text/input',
  attributes:{
    'class': 'mdl-textfield mdl-js-textfield',
  },
  events: {
    'input input': '_onInput',
  },
  _standard_patterns: {
    alpha: '[A-Z,a-z]*',
    capital_alpha: '[A-Z]*',
    lower_alpha: '[a-z]*',
    alpha_numeric: '[A-Z,a-z,0-9]*',
    numeric: '-?[0-9]*(\\.[0-9]+)?',
    numeric_positive: '[0-9]*(\\.[0-9]+)?',
    numeric_whole: '-?[0-9]*',
    numeric_whole_positive: '[0-9]*',
    phone_number: '((\\()?[2-9]{1}\\d{2}(\\))?-)?[2-9]{1}\\d{2}-\\d{4}',
    ssn: '[1-9]{3}-[1-9]{2}-[1-9]{4}'
  },
  data_source:[
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'label', required: false, default: ''},
    {key: 'float_label', required: false, default: false},
    {key: 'pattern', required: false},
    {key: 'error_msg', required: false},
  ],
  init_functions:[
    'setup',
    'setupPattern',
  ],

  setup: function() {
    _.bindAll(this,'_handleModelUpdate','_onInput');

    this.display = {
      label: this.data.label,
      id: this.cid+'text_input',
      value: this.data.model.get(this.data.attribute),
    };

    if (this.data.float_label) {
      this.$el.addClass('mdl-textfield--floating-label');
    }

    this.listenTo(this.data.model,'change:'+this.data.attribute,
                  this._handleModelUpdate);
  },

  setupPattern: function() {
    this.display.error_msg = this.data.error_msg;

    if (!!this.data.pattern && !!this._standard_patterns[this.data.pattern]) {
      this.display.pattern = this._standard_patterns[this.data.pattern];
    }
    else {
      this.display.pattern = this.data.pattern;
    }
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
