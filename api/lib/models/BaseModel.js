/**
 * BaseModel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('node-uuid');

module.exports = {
  attributes: {
    id:{
      type: 'string',
      uuidv4: true,
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function() { return uuid.v4(); }
    },
    text: {
      type: 'string'
    }
  },

  autoPK: false
};