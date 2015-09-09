'use strict';

module.exports = function (router) {

    var model = {
    	name: 'name form s.js'
    };

    router.get('/', function(req, res) {
        res.render('sc/s', model);
    });

};