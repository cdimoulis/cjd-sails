/**
 * ObjController
 *
 * @description :: Server-side logic for managing objs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  test: function (req,res) {
    console.log('\n\nTEST FUNCTION!\n\n');
    template = "\
    <html>\
      <head>\
        <script src='//ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js'></script>\
      </head>\
      <body>\
        Test Worked\
      </body>\
    </html>\
    ";
    return res.send(template);
  },


  getData: function (req,res) {
    console.log('\n\nREQ:\n',req.url,'\n\n');
    data = {one: 'Data 1', two: 'Data 2', three: "Data 3"};
    console.log("\n\nSending ",data,"\n\n");
    return res.json(data);
  }

};

