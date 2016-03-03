App.View.extend({
  name: 'sections/tables',

  init_functions: [
    'setup',
  ],

  setup: function() {
    col = new App.Collection([{name:"Chris", age: 32, nationality: 'greek'},
                              {name:"Naomi", age: 30, nationality: 'unknown'},
                              {name:"James", age: 1, nationality: 'greek'}]);
    this.components = c = {}

    c.table = {
      collection: col,
      columns: ['name','age','nationality'],
      selectable: true,
    };

  },
});
