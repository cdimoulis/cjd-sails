/**
 * Obj.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var BaseModel = require('../lib/models/BaseModel');

module.exports = _.merge( {}, BaseModel, {

  attributes: {
    text: {
      type: 'string'
    },

    getObjName: function() {
      console.log('My Obj Name');
    }
  },

  showObjs: function(obj1,obj2) {
    console.log('1:',obj1.text,'\n2:',obj2.text);
    sails.log.info('1:',obj1.text,'\n2:',obj2.text);
  }

});

