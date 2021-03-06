this.Application = function (options) {

  var _router = null;
  var _current_page = null;

  this.Models = {};
  this.Collections = {};
  this.Views = {};
  this.Pages = {};
  this.Routers = {};

  this.View = Backbone.View.extend();
  this.Page = this.View.extend();

  this.Collection = Backbone.Collection.extend();
  this.Model = Backbone.Model.extend();

  this.setPage = function (page) {
    // Remove the page if one is currently being shown.
    if (!!_current_page){
      _current_page.remove();
      _current_page = null;
    }

    // Add page if exists
    if (!!page){
      page.render();
      _current_page = page;
      $page = $.find('#page');
      page.appendTo($page);
    }
  };

  this.navigate = function (route) {
    _router.navigate(route, {trigger: true});
  };

  /*****
  * Adjust the extend function of backbone's classes
  * This change will allow the Application object to
  * store all the created classes (i.e. models, collections, views)
  ******/
  var _registerClass = function (cls, hash) {
    cls_extend = cls.extend
    cls.extend = function () {
      child = cls_extend.apply(this,arguments);
      if (child.prototype.name){
        hash[child.prototype.name] = child;
      }
      return child;
    }
  };

  _registerClass(this.Model, this.Models);
  _registerClass(this.Collection, this.Collections);
  _registerClass(this.View, this.Views);
  _registerClass(this.Page, this.Pages);
  _registerClass(Backbone.Router, this.Routers);
  /*********
  * END REGISTER
  **********/

  _.extend(this, {
    initialize: function() {
      return null;
    },
    ready: function() {
      return null;
    },
    main: function() {
      return null;
    }
  });

  _.extend(this, options);
  this.initialize.call(this);

  // Wait until page load
  $((function(_this) {
    return function() {
      _.defer( function() {

        // Setup the router
        if (_.has(_this.Routers, "Application")){
          _router = new _this.Routers.Application();
        }

        var location = window.location.hash;

        if (!!location){
          _router.loadPage(location.replace('#page/',''));
        }
        else{
          _router.navigate('page/index',{trigger:true});
        }
      }); //End Defer

      _this.ready.call(_this);
      _this.main.call(_this);
    };
  })(this)); // End $

  return this;
};
