this.App = new Application({
  Templates: Handlebars.Templates,

  initialize: function () {

    return this;
  },

  ready: function () {
    Backbone.history.start({
      pushState: false,
      root: "/",
      silent: false
    });

    Backbone.history.loadUrl();

    return this;
  },

  main: function () {

    return this;
  }
});