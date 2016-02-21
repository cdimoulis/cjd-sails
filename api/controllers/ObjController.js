/**
 * ObjController
 *
 * @description :: Server-side logic for managing objs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  test: function (req,res) {
    var obj_1,obj_2;

    Obj.count().exec(function (err,results){
      console.log('res',results);
      // return res.ok();
    });

    var cb = function (obj1, obj2) {
      if(obj1 && obj2){
        Obj.showObjs(obj1,obj2);
        return res.ok();
      }
    }

    Obj.findOne({text:'FirstObj'}).exec(function (err,obj) {
      if (err) {
        return res.negotiate(err);
      }
      sails.log.info('Found 1',obj);
      obj_1 = obj;
      cb(obj_1,obj_2);
    });

    Obj.findOne({text: 'SecondObj'}).exec(function (err,obj) {
      if (err) {
        return res.negotiate(err);
      }
      sails.log.info('Found 2',obj);
      obj_2 = obj;
      cb(obj_1,obj_2);
    });
  },


  getData: function (req,res) {
    console.log('\n\nREQ:\n',_.keys(req),'\n\n');
    data = {one: 'Data 1', two: 'Data 2', three: "Data 3"};
    console.log("\n\nSending ",data,"\n\n");
    return res.json(data);
  },

  getFlight: function (req, res) {
    route = "https://www.delta.com/air-shopping/priceTripAction.action?dispatchMethod=priceItin&paxCount=1&tripType=multiCity&cabin=B5-Coach&itinSegment[0]=0:V:STL:LGA:DL:4250:Apr:24:2016:04P&itinSegment[1]=0:V:LGA:BOS:DL:2696:Apr:24:2016:09P&itinSegment[2]=1:V:BOS:LAX:DL:2532:Apr:27:2016:06P&itinSegment[3]=2:V:LAX:MSP:DL:1434:Apr:28:2016:12A&itinSegment[4]=2:V:MSP:STL:DL:0936:Apr:28:2016:07A&numOfSegments=5&currencyCd=USD&exitCountry=US";
    return res.redirect(route);
  },

  httpRequestExample: function (req, res) {
    var http = require('http');
    var querystring = require('querystring');

    var postData = {
      method: "search",
      params: {
        2: [
          "carrierStopMatrix",
          "currencyNotice",
          "durationSliderItinerary",
          "itineraryArrivalTimeRanges",
          "itineraryCarrierList",
          "itineraryDepartureTimeRanges",
          "itineraryDestinations",
          "itineraryOrigins",
          "itineraryPriceSlider",
          "itineraryStopCountList",
          "solutionList",
          "warningsItinerary"
        ],
        3: {
          4: {
            1: 1,
            2: 30
          },
          5: {
            1: 1
          },
          7: [
            {
              3: ["BOS"],
              5: ["STL"],
              8: "2016-04-24",
              9: 0,
              11: 0,
              12: "dl+"
            }
          ],
          8: "COACH",
          9: 1,
          10: 1,
          15: "SUNDAY",
          16: 0,
          22: "default",
          25: 1
        },
        4: "specificDates",
        7: "!bG9ChpyO_VWPYXdEjk3BzuPiwkQCAAAAIVIAAAAKCgAWxS-RYQKnd_nbxJ5CwXmQ33TfbZeQbCoBDWXuXooG5n_MaKb2k7BUbICVCXXcvxVUCq4lNEEgf6HVAuxic1fe8UWkBjn_xlkjVJrHz7XTpCUlawy2fSQVKq7OBXWHm-RkyoqHoj56Ra6sqblFTz9WYJjkIep9WqBCV_c709O0gXQGaIIVnshNjhhwOSE8Jgckh_YCqNNshR4KsI8wONopeJLbuQW9gbmuNcm-1Ny4GMH1HWvr5CmW22dl92sttboFNlFRLEo61fSVP6Lm1AK0VlKlDiaxK1E-OiKVlnqDSK7xnd-wFnwZHvuPDBd5Lpjtkj3O_9crmoRU8W9yJ_ijHAhVliUl1xejNe83PVJOSlVuOesBA9qe1Ga4Pap7lhzLrtk5vsU_",
        8: "wholeTrip"
      }
    };

    var postString = querystring.stringify(postData);

    var options = {
      hostname: "matrix.itasoftware.com",
      path: "/search",
      method: "POST",
      headers: {
        'Content-Type': 'applicatoin/json',
        'Accept': 'application/json',
        'Content-Length': postString.length
      }
    };

    var search = http.request(options, function(response){
      var responseData = '';
      response.setEncoding('utf8');

      response.on('data', function(chunk){
        console.log('chunk',chunk);
        responseData += chunk;
      });

      response.on('end',function(){
        try {
          if(responseData.length)
            return res.json(JSON.parse(responseData));
          else
            // 500 error
            return res.serverError({error: "Empty Stuff"})
        }
        catch (e) {
          sails.log.warn('Could not parse response from ' + e);
        }
      });
    });

    search.on('error',function(e){
      console.log('problem',e);
    });

    search.write(postString);
    search.end();

  }

};

