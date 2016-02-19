/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 
   party: function (req, res) {
    return res.view("test",{party: "I am man!"});
   }

};

