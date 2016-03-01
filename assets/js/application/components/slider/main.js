App.View.extend({
  name: 'components/slider/main',
  events:{
    'input input': '_onChange',
  },
  data_source: [
    {key: 'model', required: true},
    {key: 'attribute', required: true},
    {key: 'max', required: false, default: 10},
    {key: 'min', required: false, default: 0},
    {key: 'step', required: false, default: 1},
  ],
  init_functions: [
    'setup',
  ],

  setup: function() {
    _.bindAll(this, '_handleModelChange', '_onChange');
    var value = this.data.model.get(this.data.attribute) || 0;

    this.display = {
      id: this.cid+'slider',
      value: value,
      max: this.data.max,
      min: this.data.min,
      step: this.data.step,
    };

    this.listenTo(this.data.model,'change:'+this.data.attribute,
                  this._handleModelChange);
  },

  _handleModelChange: function(model,value) {
    var $slider = this.$el.find('#'+this.cid+'slider.mdl-slider');
    var slider = $slider[0];
    slider.MaterialSlider.change(value);
  },

  _onChange: function(e) {
    var $slider = this.$el.find('#'+this.cid+'slider.mdl-slider');
    var slider = $slider[0];
    this.data.model.set(this.data.attribute,parseFloat(slider.value));
  },

});
