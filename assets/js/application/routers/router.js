Backbone.Router.extend({
  name: "Application",
  routes:{
    "page/:page_name": 'loadPage'
  },

  loadPage: function (page_name, op) {
    var page;
    if (!!App.Pages['pages/'+page_name]){
      page = new App.Pages['pages/'+page_name]();
    }
    App.setPage(page);
  }
});