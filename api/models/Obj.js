/**
 * Obj.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var BaseModel = require('../lib/models/BaseModel');

module.exports = _.merge( {}, BaseModel, {

  attributes: {
    description: {
      type: 'text'
    }
  }

});

console.log('obj BaseModel', BaseModel);