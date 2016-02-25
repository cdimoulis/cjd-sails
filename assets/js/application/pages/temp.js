App.Page.extend({
  name: "pages/temp",

  init_functions: [
    'setup'
  ],


  setup: function() {
    
    this.test = "this is a test";

    this.config = {
      a: 'First',
      b: 'Component'
    };
  }

});