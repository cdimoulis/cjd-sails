App.View.extend({
  name: 'sections/tables',

  init_functions: [
    'setup',
  ],

  setup: function() {
    var col = new App.Collection([{name:"Chris", age: 32, nationality: 'greek'},
                              {name:"Naomi", age: 30, nationality: 'unknown'},
                              {name:"James", age: 1, nationality: 'greek'}]);
    var selected = new App.Collection([col.at(2),col.at(0)]);
    this.components = c = {};
    window.collection = col;

    c.table = {
      collection: col,
      columns: ['name','age','nationality'],
      selectable: true,
      selected: selected,
    };

  },
});
