App.View.extend({
  name: 'sections/lists',

  init_functions: [
    'setupLists',
  ],

  setupLists: function(){
    var collection = new App.Collection();
    collection.add([{text:'one'},{text:'two'},{text:'three'},{text:'four'}]);
    this.components = c = {};

    c.first_list = {
      collection: collection,
      view: 'components/list/test/one',
      view_data: {},
    };
  },
});
