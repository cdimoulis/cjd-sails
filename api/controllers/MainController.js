/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 
  getSubdomains:  function (req, res) {
    sails.log.info('subdomains in controller', req.subdomains);
    return res.json({success:true});
  },

  party: function (req, res) {
    return res.view("test",{party: "I am man!"});
  }

};

