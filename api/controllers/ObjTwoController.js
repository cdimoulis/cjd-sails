/**
 * ObjTwoController
 *
 * @description :: Server-side logic for managing Objtwoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  test: function (req, res) {
    var obj_1,obj_2;

    ObjTwo.count().exec(function (err,results){
      console.log('res',results);
    });

    var cb = function (obj1, obj2) {
      if(obj1 && obj2){
        ObjTwo.showObjs(obj1,obj2);
        return res.ok();
      }
    }

    ObjTwo.findOne({text:'FirstObj'}).exec(function (err,obj) {
      if (err) {
        return res.negotiate(err);
      }
      sails.log.info('Found 1',obj);
      obj_1 = obj;
      cb(obj_1,obj_2);
    });

    ObjTwo.findOne({text: 'SecondObj'}).exec(function (err,obj) {
      if (err) {
        return res.negotiate(err);
      }
      sails.log.info('Found 2',obj);
      obj_2 = obj;
      cb(obj_1,obj_2);
    });
  }
	
};

