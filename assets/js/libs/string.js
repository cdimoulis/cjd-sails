String.prototype.toUnderscore = function() {
  var str = this.replace(/[A-Z]/g, function(s) {
    return "_" + s.toLowerCase();
  });
  while (str.charAt(0) === '_') {
    str = str.slice(1);
  }
  return str;
};

String.prototype.toCamel = function() {
  return this.toLowerCase().replace(/_(.)/g, function(match, group1) {
    return group1.toUpperCase();
  });
};