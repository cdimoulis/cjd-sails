App.View.extend({
  name: 'sections/lists',

  init_functions: [
    'setupLists',
  ],

  setupLists: function(){
    collection = new App.Collection();
    collection.add([{text:'one'},{text:'two'}]);
    this.components = c = {};

    c.first_list = {
      collection: collection,
      view: 'components/list/test/one',
      view_data: {},
    };
  },
});
