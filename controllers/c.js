'use strict';

var Imooc = require('../models/c');

module.exports = function (router) {

    router.get('/', function(req, res) {

    	Imooc.find({}, function(err, docs){

			if (err) console.log(err);

			var sum = 0;

			docs.forEach(function(prod) {
				console.log(prod);
				sum += 1
			});

			var model = {
		    	name: sum
		    };
		    console.log('/c', docs.length);
		    console.log(err, docs);

		    res.render('sc/CView', model);
		});
    });
};