'use strict';

module.exports = function (router) {

    var model = {
    	name: 'name form prays.js'
    };

    router.get('/', function(req, res) {
        res.render('/prays', model);
    });

};