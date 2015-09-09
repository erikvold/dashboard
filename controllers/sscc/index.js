'use strict';

module.exports = function (router) {

    var model = {
    	name: 'name form ss.js'
    };

    router.get('/', function(req, res) {
        res.render('/ss', model);
    });

};