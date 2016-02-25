Backbone.Collection = Backbone.Collection.extend({
  
  url: function(){
    var url = '';

    if (!!this.parent){
      url += this.parent.url();
    }

    if (!!this.model){
      url += this.model.urlRoot;
    }

    return url;
  }
});