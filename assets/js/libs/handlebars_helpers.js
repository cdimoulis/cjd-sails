Handlebars.registerHelper('view', function(a,b){
  if (!App.Views[a]){
    throw "Could not find a view named: "+a
    return 
  }
  var view = new App.Views[a](b);
  if (!view.template){
    throw "View "+a+" does not have a template"
    return
  }
  var str = new Handlebars.SafeString(view.template(view));
  return str;
});